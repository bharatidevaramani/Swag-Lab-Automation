package Com.UtilClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;
import static Com.Browser.Hook.driver;
import static org.junit.Assert.*;

public class Util {
    public static WebDriverWait waitForElement(By elementSelector){
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));
        wait.until(ExpectedConditions.visibilityOfElementLocated(elementSelector));
        return wait;
    }
    public static void clickWebElement (By identifier){
        waitForElement(identifier);
        driver.findElement(identifier).click();
    }
    public static void enterFieldText(By identifier,String text){
        WebElement element = driver.findElement(identifier);
        element.sendKeys(text);
    }

    public static void assertWebElementContains(By identifier, String textContained) {
        assertTrue("Moyo is a boy", driver.findElement(identifier).getText().contains(textContained));
    }
}
//#####################################################################################################################
