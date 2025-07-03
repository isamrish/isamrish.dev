declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "@/data/posts.json" {
  const value: { posts: { date: string }[] };
  export default value;
}