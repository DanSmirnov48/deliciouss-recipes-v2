import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Form, Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { useIngredients } from "@/hooks/useIngredients";
import CartItem from "./CartItem";
import { Card, CardContent } from "./ui/card";
import { FormField, FormItem, FormMessage, FormControl } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Cart = () => {
  const { ingredients } = useIngredients();
  const itemCount = ingredients.length;

  const formSchema = z.object({
    item: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item: "",
    },
  });

  const handleAddReview = async (review: z.infer<typeof formSchema>) => {

  };

  const addNewItem = () => (
    <Card className="my-14 mx-4">
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddReview)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="item"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.getValues("item") === ""}>Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )

  return (
    <Sheet>
      <SheetTrigger className="group mr-4 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-1 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex !max-w-3xl w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea>
                {ingredients.map((ingredient, idx) => (
                  <CartItem ingredient={ingredient} key={idx} />
                ))}
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    to="/"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Do something
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <img
                src="/images/undraw_empty_cart_co35.png"
                className="fill"
                alt="image"
              />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                to="/"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground underline",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
