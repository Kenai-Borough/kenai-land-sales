CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE profile_role AS ENUM ('buyer', 'seller', 'admin');
CREATE TYPE parcel_status AS ENUM ('draft', 'active', 'pending', 'under_contract', 'sold', 'expired');
CREATE TYPE parcel_land_type AS ENUM (
  'residential',
  'commercial',
  'agricultural',
  'recreational',
  'waterfront',
  'riverfront',
  'off_grid',
  'homestead',
  'timber'
);

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE,
  full_name text,
  role profile_role NOT NULL DEFAULT 'buyer',
  phone text,
  avatar_url text,
  is_verified boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE parcels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  address text,
  city text NOT NULL,
  region text,
  state text NOT NULL DEFAULT 'AK',
  zip text,
  lat numeric(10,6),
  lng numeric(10,6),
  acreage numeric(10,2) NOT NULL,
  price numeric(12,2) NOT NULL,
  price_per_acre numeric(12,2) GENERATED ALWAYS AS (price / NULLIF(acreage, 0)) STORED,
  land_type parcel_land_type NOT NULL,
  zoning text,
  road_access boolean NOT NULL DEFAULT false,
  utilities boolean NOT NULL DEFAULT false,
  water_rights boolean NOT NULL DEFAULT false,
  buildable boolean NOT NULL DEFAULT false,
  surveyed boolean NOT NULL DEFAULT false,
  clear_title boolean NOT NULL DEFAULT false,
  features text[] NOT NULL DEFAULT '{}',
  photos text[] NOT NULL DEFAULT '{}',
  documents text[] NOT NULL DEFAULT '{}',
  title_status text,
  survey_status text,
  environmental_status text,
  easements text,
  liens text,
  nearby_amenities jsonb NOT NULL DEFAULT '[]'::jsonb,
  status parcel_status NOT NULL DEFAULT 'draft',
  view_count integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE parcel_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parcel_id uuid NOT NULL REFERENCES parcels(id) ON DELETE CASCADE,
  photo_url text NOT NULL,
  caption text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE parcel_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parcel_id uuid NOT NULL REFERENCES parcels(id) ON DELETE CASCADE,
  document_url text NOT NULL,
  document_type text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE saved_parcels (
  profile_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  parcel_id uuid NOT NULL REFERENCES parcels(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (profile_id, parcel_id)
);

CREATE TABLE saved_searches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  label text NOT NULL,
  query jsonb NOT NULL,
  alert_enabled boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parcel_id uuid NOT NULL REFERENCES parcels(id) ON DELETE CASCADE,
  buyer_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  seller_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  buyer_name text NOT NULL,
  buyer_email text NOT NULL,
  buyer_phone text,
  message text NOT NULL,
  seller_response text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE parcel_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parcel_id uuid NOT NULL REFERENCES parcels(id) ON DELETE CASCADE,
  viewer_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  viewed_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parcel_id uuid NOT NULL REFERENCES parcels(id) ON DELETE CASCADE,
  seller_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  buyer_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  status text NOT NULL DEFAULT 'escrow_open',
  sale_price numeric(12,2),
  earnest_money numeric(12,2),
  title_company text,
  escrow_company text,
  closing_date date,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  transaction_id uuid NOT NULL REFERENCES transactions(id) ON DELETE CASCADE,
  reviewer_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  reviewee_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX parcels_seller_status_idx ON parcels (seller_id, status);
CREATE INDEX parcels_city_region_idx ON parcels (city, region);
CREATE INDEX parcels_price_idx ON parcels (price);
CREATE INDEX parcels_acreage_idx ON parcels (acreage);
CREATE INDEX parcels_land_type_idx ON parcels (land_type);
CREATE INDEX parcels_features_idx ON parcels USING gin (features);
CREATE INDEX parcels_nearby_amenities_idx ON parcels USING gin (nearby_amenities);
CREATE INDEX parcel_photos_parcel_idx ON parcel_photos (parcel_id, sort_order);
CREATE INDEX parcel_documents_parcel_idx ON parcel_documents (parcel_id);
CREATE INDEX saved_searches_profile_idx ON saved_searches (profile_id);
CREATE INDEX inquiries_seller_idx ON inquiries (seller_id, created_at DESC);
CREATE INDEX parcel_views_parcel_idx ON parcel_views (parcel_id, viewed_at DESC);
CREATE INDEX transactions_seller_idx ON transactions (seller_id, closing_date);

CREATE TRIGGER profiles_set_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER parcels_set_updated_at
BEFORE UPDATE ON parcels
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER saved_searches_set_updated_at
BEFORE UPDATE ON saved_searches
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER inquiries_set_updated_at
BEFORE UPDATE ON inquiries
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER transactions_set_updated_at
BEFORE UPDATE ON transactions
FOR EACH ROW EXECUTE FUNCTION set_updated_at();

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE parcels ENABLE ROW LEVEL SECURITY;
ALTER TABLE parcel_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE parcel_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_parcels ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE parcel_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

CREATE POLICY "profiles public read"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "profiles self manage"
  ON profiles FOR ALL
  USING (auth.uid() = id OR is_admin())
  WITH CHECK (auth.uid() = id OR is_admin());

CREATE POLICY "active parcels public read"
  ON parcels FOR SELECT
  USING (status IN ('active', 'pending', 'under_contract', 'sold') OR auth.uid() = seller_id OR is_admin());

CREATE POLICY "seller parcel manage"
  ON parcels FOR ALL
  USING (auth.uid() = seller_id OR is_admin())
  WITH CHECK (auth.uid() = seller_id OR is_admin());

CREATE POLICY "parcel photos read"
  ON parcel_photos FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_photos.parcel_id
        AND (parcels.status IN ('active', 'pending', 'under_contract', 'sold') OR parcels.seller_id = auth.uid() OR is_admin())
    )
  );

CREATE POLICY "parcel photos manage"
  ON parcel_photos FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_photos.parcel_id
        AND (parcels.seller_id = auth.uid() OR is_admin())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_photos.parcel_id
        AND (parcels.seller_id = auth.uid() OR is_admin())
    )
  );

CREATE POLICY "parcel documents read"
  ON parcel_documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_documents.parcel_id
        AND (parcels.status IN ('active', 'pending', 'under_contract', 'sold') OR parcels.seller_id = auth.uid() OR is_admin())
    )
  );

CREATE POLICY "parcel documents manage"
  ON parcel_documents FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_documents.parcel_id
        AND (parcels.seller_id = auth.uid() OR is_admin())
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_documents.parcel_id
        AND (parcels.seller_id = auth.uid() OR is_admin())
    )
  );

CREATE POLICY "saved parcels self manage"
  ON saved_parcels FOR ALL
  USING (profile_id = auth.uid() OR is_admin())
  WITH CHECK (profile_id = auth.uid() OR is_admin());

CREATE POLICY "saved searches self manage"
  ON saved_searches FOR ALL
  USING (profile_id = auth.uid() OR is_admin())
  WITH CHECK (profile_id = auth.uid() OR is_admin());

CREATE POLICY "inquiries seller or buyer read"
  ON inquiries FOR SELECT
  USING (buyer_id = auth.uid() OR seller_id = auth.uid() OR is_admin());

CREATE POLICY "buyers create inquiries"
  ON inquiries FOR INSERT
  WITH CHECK (buyer_id = auth.uid() OR buyer_id IS NULL OR is_admin());

CREATE POLICY "seller update inquiries"
  ON inquiries FOR UPDATE
  USING (seller_id = auth.uid() OR is_admin())
  WITH CHECK (seller_id = auth.uid() OR is_admin());

CREATE POLICY "parcel views create"
  ON parcel_views FOR INSERT
  WITH CHECK (true);

CREATE POLICY "parcel views seller read"
  ON parcel_views FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM parcels
      WHERE parcels.id = parcel_views.parcel_id
        AND (parcels.seller_id = auth.uid() OR is_admin())
    )
  );

CREATE POLICY "transactions parties read"
  ON transactions FOR SELECT
  USING (seller_id = auth.uid() OR buyer_id = auth.uid() OR is_admin());

CREATE POLICY "seller create transactions"
  ON transactions FOR INSERT
  WITH CHECK (seller_id = auth.uid() OR is_admin());

CREATE POLICY "transaction parties update"
  ON transactions FOR UPDATE
  USING (seller_id = auth.uid() OR buyer_id = auth.uid() OR is_admin())
  WITH CHECK (seller_id = auth.uid() OR buyer_id = auth.uid() OR is_admin());

CREATE POLICY "reviews parties read"
  ON reviews FOR SELECT
  USING (reviewer_id = auth.uid() OR reviewee_id = auth.uid() OR is_admin());

CREATE POLICY "reviewers create reviews"
  ON reviews FOR INSERT
  WITH CHECK (reviewer_id = auth.uid() OR is_admin());
