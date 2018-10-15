<%@ page import="java.util.ArrayList" %>
<!doctype html>
<head>
	<title>Products in the Database</title>
	<link rel="stylesheet" href="/jadrn053/css/p2.css" />
</head>

	<body>
    <p>HI BRODHAVI</p>
	<% ArrayList<Product> products = (ArrayList<Product>) request.getAttribute("product_List");
		for (Product product: products) {%>

		<div>
			<label><%=product.getManufacturerId()%></label>
			<label><%=product.getRetail()%></label>
			<label><%=product.getCost()%></label>
		</div>

		<%}%>
</body>
</html>
