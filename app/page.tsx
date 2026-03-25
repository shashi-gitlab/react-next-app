import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel tempora corrupti possimus eos doloremque, tempore id, beatae explicabo numquam assumenda nobis fugiat a natus eius eligendi repudiandae voluptatem provident?</p>
      <Button variant={"default"} size={'lg'}>chekout</Button>
    </Container>
  );
}
