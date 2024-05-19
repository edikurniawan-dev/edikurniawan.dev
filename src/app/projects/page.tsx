export default function Projects() {
  const data = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatibus placeat similique omnis temporibus quis unde fuga asperiores, ipsam dolor nesciunt animi rerum cum? Sapiente omnis nihil eum. Eum, facere",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>

      <div className="mt-5">
        <p>
          Some of the projects I have worked on throughout my career in web development can be found on this page. Each
          project showcases my dedication to creating innovative and functional solutions, as well as my commitment to
          continuous learning and growth in this field.
        </p>
        <div className="mt-5 grid border-y border-l border-dashed md:grid-cols-2 [&>div:nth-child(5)]:border-b-transparent [&>div:nth-child(6)]:border-r [&>div:nth-child(6)]:border-dashed">
          {data.map((data, i) => (
            <div key={i} className="flex flex-col border-b border-r border-dashed p-6 sm:p-8">
              <div className="">Image</div>
              {data.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
