import { revalidatePath } from "next/cache";

export default function Home() {
  return (
    <div>
      Random number: {Math.random()}
      <div>
        <form
          action={async () => {
            "use server";
            revalidatePath("/");
          }}
        >
          <button type="submit">Click me</button>
        </form>
      </div>
    </div>
  );
}
