import java.math.*;

public class QuadraticEquation {
  private int a, b, c;

  public QuadraticEquation(int a, int b, int c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public int getA() {
    return this.a;
  }

  public int getB() {
    return this.b;
  }

  public int getC() {
    return this.c;
  }

  public int getDiscriminant() {
    int a = this.a;
    int b = this.b;
    int c = this.c;

    int discriminant = (b * b) - (4 * a * c);

    return discriminant;
  }

  public int getRoot1() {
    int a = this.a;
    int b = this.b;

    int discriminant = getDiscriminant();
    int root1 = (-b + Math.sqrt(discriminant)) / (2 * a);

    return root1;
  }

  public int getRoot2() {
    int a = this.a;
    int b = this.b;

    int discriminant = getDiscriminant();
    int root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return root2;
  }
}