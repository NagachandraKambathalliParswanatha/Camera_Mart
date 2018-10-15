import java.sql.*;
import java.util.*;

public class DBHelper implements java.io.Serializable {
    private static String connectionURL = "jdbc:mysql://opatija:3306/jadrn053?user=jadrn053&password=calendar";
    private static Connection connection = null;
    private static Statement statement = null;
    private static ResultSet resultSet = null;

    private static final String COLUMN_SKU = "sku";
    private static final String COLUMN_VENDOR_MODEL = "vendorModel";
    private static final String COLUMN_VEN_ID = "venID";
    private static final String COLUMN_CAT_ID = "catID";
    private static final String COLUMN_COST = "cost";
    private static final String COLUMN_RETAIL = "retail";
    private static final String COLUMN_DESCRIPTION = "description";
    private static final String COLUMN_MANUFACTURER_ID = "manufacturerId";
    private static final String COLUMN_FEATURES = "features";
    private static final String COLUMN_QUANTITY = "quantity";
    private static final String COLUMN_CATEGORY = "category";
    private static final String COLUMN_PRODUCT_IMAGE = "image";


    public DBHelper() {}


    public static ArrayList<Product> getProducts(String s) {
        ArrayList<Product> products = new ArrayList<>();

        try
        {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            connection = DriverManager.getConnection(connectionURL);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(s);
            ResultSetMetaData rsmd = resultSet.getMetaData();
            while (resultSet.next())
            {
                Product product = new Product();
                product.setSku(resultSet.getString(COLUMN_SKU));
                product.setVendorId(resultSet.getString(COLUMN_VEN_ID));
                product.setCategoryId(resultSet.getString(COLUMN_CAT_ID));
                product.setCost(resultSet.getDouble(COLUMN_COST));
                product.setRetail(resultSet.getDouble(COLUMN_RETAIL));
                product.setFeatures(resultSet.getString(COLUMN_FEATURES));
                product.setDescription(resultSet.getString(COLUMN_DESCRIPTION));
                product.setManufacturerId(resultSet.getString(COLUMN_MANUFACTURER_ID));
                product.setQuantity(resultSet.getInt(COLUMN_QUANTITY));
                product.setVendor(resultSet.getString(COLUMN_VENDOR_MODEL));
                product.setCategory(resultSet.getString(COLUMN_CATEGORY));
                product.setImage(resultSet.getString(COLUMN_PRODUCT_IMAGE));

                products.add(product);
            }

        }
        catch(Exception e)
        {
            System.out.print("Exception");
        }
        return products;
    }
}
