'use client'

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";



const RenderMDX = ({ blog }) => {
  const MDXComponent = useMDXComponent(blog.body.code);
  return (
    <section className="prose prose-xl dark:prose-invert mx-auto prose-yellow col-span-2 max-w-[100%]">
      <MDXComponent
        components={{
          Image,
        }}
      />
    </section>
  );
};

export default RenderMDX;