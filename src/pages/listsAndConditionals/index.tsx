import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export function ListsAndConditionals() {
  const [toggle, setToogle] = useState<boolean>(false);

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>1- Ternary rendering</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setToogle((prevState) => !prevState)}>
            Toogle component
          </Button>
        </CardContent>
        <CardFooter>
          {toggle ? (
            <Card className="bg-primary text-muted">
              <CardContent>
                <p>This is the component when the toggle is activated</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-muted text-primary">
              <CardContent>
                <p>
                  This is the completely random component that is shown when we
                  disable toogle
                </p>
              </CardContent>
            </Card>
          )}
        </CardFooter>
      </Card>
    </section>
  );
}
