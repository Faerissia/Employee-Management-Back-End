export interface EmployeeBody {
  uuid: string;
  first_name?: string;
  last_name?: string;
  gender?: number;
  birth_day?: Date;
  address?: string;
  sub_district?: string;
  district?: string;
  province?: string;
  expired_id_card?: Date;
  created_date?: Date;
  updated_date: Date;
}
