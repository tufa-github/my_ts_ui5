using db from'../db/model';

service PublicService{
  entity email as projection on db.email;
  entity password as projection on db.password;
}