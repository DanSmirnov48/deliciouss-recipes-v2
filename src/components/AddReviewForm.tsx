import * as z from "zod";
import { Recipe } from "@/types";
import { Textarea } from "./ui/textarea";
import { ratingStyle } from "@/lib/utils";
import { useForm } from "react-hook-form";
import "@smastrom/react-rating/style.css";
import { Button } from "@/components/ui/button";
import { Rating } from "@smastrom/react-rating";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddReview } from "@/lib/react-query/queries";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const AddReviewForm = ({ recipe }: { recipe: Recipe }) => {

  const { mutateAsync, isPending } = useAddReview();

  const formSchema = z.object({
    rating: z.number().min(1, { message: "Please provide a Rating" }).max(5),
    review: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      review: "",
    },
  });

  const handleAddReview = async (review: z.infer<typeof formSchema>) => {
    const res = await mutateAsync({
      rating: review.rating,
      comment: review.review,
      recipe: recipe.id,
    });
    if (res && res.status === 201 && res.statusText === "Created") {
      form.reset()
      console.log("Review Created")
      console.log(res.data)
    }
  };

  return (
    <Card className="my-14 mx-4">
      <CardTitle className="text-base font-normal text-center my-5"> How would you rate <i className="font-medium">{recipe.title} ?</i></CardTitle>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddReview)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <Rating
                    itemStyles={ratingStyle}
                    style={{ maxWidth: 150 }}
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.getValues("rating") === 0}>
              {isPending ? "Posting" : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddReviewForm;
