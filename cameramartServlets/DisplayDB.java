import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class DisplayDB extends HttpServlet {


    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException, ServletException
    {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
	String s = "SELECT sku, vendorModel, description, retail FROM product;";
	String result = DBHelper.doQuery(s);    
	request.setAttribute("table",result);
	RequestDispatcher d = request.getRequestDispatcher("/jsp/ShowTable.jsp");
	d.forward(request, response);
	}
    
}


