import Head from "next/head";
import { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
const ADD_TODO = gql`
  mutation (
    $text: String!
    $description: String!
    $Price: Int!
    $deliverable: Boolean!
    $publishedAt: DateTime!
  ) {
    createPost(
      data: {
        title: $text
        description: $description
        deliverable: $deliverable
        Price: $Price
        publishedAt: $publishedAt
      }
    ) {
      data {
        attributes {
          title
          description
          deliverable
          Price
        }
      }
    }
  }
`;

export default function submitlist() {
  let input;
  const [addTodo, { data, loading, error }] = useMutation(ADD_TODO);
  const [title, setTtile] = useState("a new nameless product");
  const [description, setDescription] = useState(
    "this product has no description"
  );
  const [price, setPrice] = useState(5);

  const [deliverable, setDeliverable] = useState(false);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(title);
          console.log(description);
          console.log(price);
          console.log(new Date());
          console.log(deliverable);
          addTodo({
            variables: {
              text: title,
              description: description,
              deliverable: deliverable,
              Price: price,
              publishedAt: new Date(),
            },
          });
          // input.value = '';
        }}
      >
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => setTtile(e.target.value)}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          value={description}
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        />
        <br />
        <select
          id="deliverable"
          onChange={(e) => {
            setDeliverable(!!e.target.value);
          }}
        >
          <option value={true}> deliverable </option>
          <option value={false}>not deliverable </option>
        </select>

        <br />
        <p>price:</p>
        <input
          type="number"
          value={price}
          name="price"
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="price"
        />

        <button type="submit">Add the product</button>
      </form>
    </div>
  );
}
