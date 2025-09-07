CREATE TABLE ticket (
   ticket_id INTEGER,
   ticket_price NUMERIC(15,2)  ,
   ticket_value VARCHAR(50) ,
   PRIMARY KEY(ticket_id)
);

CREATE TABLE Dinosaure(
   dinosaure_ID INTEGER,
   dinosaur_name VARCHAR(50) ,
   dinosaur_diet  VARCHAR(50) ,
   dinosaur_species VARCHAR(50) ,
   dinosaur_description VARCHAR(500) ,
   dinosaur_available BOOLEAN,
   PRIMARY KEY(dinosaure_ID)
);

CREATE TABLE Utilisateur(
   user_id INTEGER,
   user_admin BOOLEAN,
   user_first_name VARCHAR(50) ,
   user_surname VARCHAR(50) ,
   user_birthdate DATE,
   user_adress VARCHAR(50) ,
   user_mail VARCHAR(50) ,
   user_password VARCHAR(100) ,
   PRIMARY KEY(user_id)
);

CREATE TABLE Réservation(
   reservation_id INTEGER,
   reservation_date DATE,
   user_id INTEGER NOT NULL,
   PRIMARY KEY(reservation_id),
   FOREIGN KEY(user_id) REFERENCES Utilisateur(user_id)
);

CREATE TABLE ticket_dinosaur(
   ticket_id INTEGER,
   dinosaure_ID INTEGER,
   PRIMARY KEY(ticket_id, dinosaure_ID),
   FOREIGN KEY(ticket_id) REFERENCES ticket (ticket_id),
   FOREIGN KEY(dinosaure_ID) REFERENCES Dinosaure(dinosaure_ID)
);

CREATE TABLE reservation_ticket(
   reservation_id INTEGER,
   ticket_id INTEGER,
   PRIMARY KEY(reservation_id, ticket_id),
   FOREIGN KEY(reservation_id) REFERENCES Réservation(reservation_id),
   FOREIGN KEY(ticket_id) REFERENCES ticket (ticket_id)
);
