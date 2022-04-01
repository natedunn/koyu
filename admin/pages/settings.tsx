import { useState } from "react";
import { PageContainer } from "@keystone-6/core/admin-ui/components";
// import useQuery from apollo
import { gql, useQuery, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { tw } from "twind";

export default function CustomPage() {
  const [message, setMessage] = useState("");
  const { data: userData } = useQuery(gql`
    query GetUsers {
      users {
        name
        id
      }
    }
  `);

  const user = userData?.users[0] ?? null;

  const [updateUser, { data, loading, error }] = useMutation(
    gql`
      mutation UpdateUser($id: ID!, $name: String!) {
        updateUser(where: { id: $id }, data: { name: $name }) {
          id
          name
        }
      }
    `,
    {
      onCompleted: () => setMessage("User updated successfully"),
    }
  );

  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const submit = (data) => {
    updateUser({
      variables: {
        id: user.id,
        name: data.name,
      },
    });
  };

  return (
    <PageContainer header="Custom Page">
      <h1>This is a custom Admin UI Page</h1>
      <p>
        It can be accessed via the route <a href="/custom-page">/custom-page</a>
      </p>
      Should be the name: {userData?.users[0]?.name}
      <br />
      <hr />
      {message}
      <hr />
      <br />
      <form onSubmit={handleSubmit(submit)}>
        {!user ? null : (
          <>
            <label htmlFor="name">Name:</label>
            <input
              className={tw`border-black border-2`}
              type="text"
              id="name"
              {...register("name", {
                required: true,
                value: user?.name ?? null,
              })}
            />
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </PageContainer>
  );
}
