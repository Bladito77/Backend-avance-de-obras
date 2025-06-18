import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;

public class GeneradorReporte {
   public GeneradorReporte() {
   }

   public static void main(String[] var0) {
      if (var0.length == 0) {
         System.out.println("Debes pasar un ID como argumento.");
         System.exit(1);
      }

      String var1 = var0[0];
      String var2 = "jdbc:mysql://localhost:3306/control_deobras";
      String var3 = "root";
      String var4 = "";

      try {
         Connection var5 = DriverManager.getConnection(var2, var3, var4);

         try {
            //String var6 = "reports/reporte_diario_obra.jasper";
            //String var6 = new java.io.File("reports/reporte_diario_obra.jasper").getAbsolutePath();
            String var6 = new java.io.File("./reports/reporte_diario_obra.jasper").getCanonicalPath();
            System.out.println("📁 Usando ruta: " + var6);
            HashMap var7 = new HashMap();
            System.out.println("📁 Ruta base desde la que busca el archivo: " + new java.io.File(".").getAbsolutePath());
            var7.put("id", Integer.parseInt(var1));
            JasperPrint var8 = JasperFillManager.fillReport(var6, var7, var5);
            String var9 = "reportes_generados/reporte_" + var1 + ".pdf";
            JasperExportManager.exportReportToPdfFile(var8, var9);
            System.out.println("Reporte generado: " + var9);
         } catch (Throwable var11) {
            if (var5 != null) {
               try {
                  var5.close();
               } catch (Throwable var10) {
                  var11.addSuppressed(var10);
               }
            }

            throw var11;
         }

         if (var5 != null) {
            var5.close();
         }
      } catch (Exception var12) {
         var12.printStackTrace();
         System.exit(2);
      }

   }
}
