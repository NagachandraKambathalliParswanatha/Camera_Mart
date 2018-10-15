import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class DisplayBySku extends HttpServlet {
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
            throws IOException, ServletException
    {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        String SelectedSku = (String)request.getParameter("SelectedSku");
        String s = "SELECT * FROM product where sku = 'SelectedSku';";
        out.print(s);
        out.print(SelectedSku);
        String result = DBHelper1.doQuery(s);
        out.print(result);
    }
}