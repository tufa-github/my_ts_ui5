namespace db;

entity email {
    loginemail: String(100);
    identifier: Integer;
    firstname: String(100);
    lastname: String(100);
}

entity password {
    loginemail: String(100);
    identifier: Integer;
    password: String(100);
    recoverycode: String(100);
    firstname: String(50);
    lastname: String(50);
    department: String(100);
    location: String(50);
}

