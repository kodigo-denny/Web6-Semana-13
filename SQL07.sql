SELECT 
o.id, employee_id, e.first_name AS 'nombre Empleado', e.last_name AS 'apellido Empleado', customer_id, c.first_name AS 'nombre Cliente', c.last_name AS 'apellido Cliente',
 order_date, shipped_date, shipper_id, s.company, ship_name, ship_address, ship_city
 FROM
  shippers AS s
right JOIN orders AS o ON s.id=o.shipper_id
INNER JOIN employees AS e ON e.id=o.employee_id
INNER JOIN customers AS c ON c.id=o.customer_id
	 

