// Tipe data untuk layanan header
export interface IServiceHeader {
  id: number;
  service_name: string;
  mandatory: boolean;
  package_id: number;
  debitur_type_id: number;
  service_price_amount: number;
  service_discount_amount: number;
  status: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  service_price_discount: number;
}

// Tipe data untuk layanan detail
export interface IServiceDetail {
  id: number;
  service_id: number;
  group: string;
  description: string;
  mandatory: boolean;
  sequence: number;
  parent: number | null;
  type: string;
  is_multiple: boolean;
  remark: string;
  status: string;
  created_by: string;
  updated_by: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  is_multiplied: boolean;
}
