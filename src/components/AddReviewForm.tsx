import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ratingStyle } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Recipe } from "@/types";
import { useAddReview } from "@/lib/react-query/queries";

const AddReviewForm = ({ recipe }: { recipe: Recipe }) => {
  const [rating, setRating] = useState<number>(0);
  const { mutateAsync, isPending, isSuccess } = useAddReview();
  const formSchema = z.object({
    review: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
    },
  });

  const handleAddReview = async (review: z.infer<typeof formSchema>) => {
    if (rating < 1) {
      alert("Add Rating");
      return;
    }
    mutateAsync({
      rating: rating,
      comment: review.review,
      recipe: recipe.id,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      form.reset();
      setRating(0);
    }
  }, [isSuccess]);

  return (
    <Card className="my-14 mx-4">
      <CardHeader>
        <CardDescription>
          Rate <span className="text-base font-bold">{recipe.title}</span>
        </CardDescription>
        <Rating
          value={rating}
          onChange={setRating}
          itemStyles={ratingStyle}
          style={{ maxWidth: 150 }}
        />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleAddReview)}
            className="flex flex-col gap-5"
          >
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
            <Button type="submit" disabled={rating < 1}>
              {isPending ? "Posting" : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddReviewForm;
