DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS expense;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS category (
  id int NOT NULL,
  name text NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO category (id, name) VALUES
	(1, 'Production'),
	(2, 'Operation'),
	(3, 'Financial'),
	(4, 'Vendor'),
	(5, 'Manpower'),
	(6, 'Software'),
	(7, 'Hardware');

CREATE TABLE if NOT EXISTS expense (
  id INtEGER NOT NULL,
  project_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  amount float NOT NULL,
  created_at DATE DEFAULT CURRENT_DATE,
  created_by text DEFAULT NULL,
  updated_at DATE DEFAULT CURRENT_DATE,
  updated_by text DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (project_id) REFERENCES project (id)
);


INSERT INTO expense (id, project_id, category_id, name, description, amount, created_at, created_by, updated_at, updated_by) VALUES
	(1, 2, 2, 'Server Maintenance', 'Server maintenance and upgrading work to incorporate BC plans', 30000, '2021-11-04 16:00:00', 'Jacky', '2021-11-06 16:00:00', 'Jacky'),
	(2, 3, 4, 'Consultant', 'Consultancy services for integration work', 10000, '2021-11-06 16:00:00', 'Helen', '2021-11-07 16:00:00', 'Helen');

CREATE TABLE IF NOT EXISTS project (
  id integer NOT NULL ,
  user_id integer NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  budget float NOT NULL DEFAULT 1000000,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES user (id)
);

INSERT INTO project (id, user_id, name, description, budget) VALUES
	(1, 4, 'RTF', 'Realtime Face Recognition', 12000),
	(2, 1, 'SWT', 'Smart Watch Tracker', 80000),
	(3, 2, 'ULS', 'Upgrade Legacy System', 11000);

CREATE TABLE IF NOT EXISTS user (
  id INTEGER NOT NULL,
  username text NOT NULL,
  password text NOT NULL,
  name text NOT NULL,
  appointment text NOT NULL DEFAULT 'Project Manager',
  PRIMARY KEY (id)
);

INSERT INTO user (id, username, password, name, appointment) VALUES
	(1, 'user101', '123456', 'Jacky', 'Project Lead'),
	(2, 'user102', '123456', 'Tommy', 'Project Manager'),
	(3, 'user103', '123456', 'Tom', 'Project Manager'),
	(4, 'user104', '123456', 'Helen', 'Project Manager'),
	(5, 'user105', '123456', 'Mark', 'Senior Project Manager');
