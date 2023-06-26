function ProjectLink({
  altText,
  link,
  src,
  title,
}: {
  altText: string;
  link: string;
  src: string;
  title: string;
}) {
  return (
    <a
      className="block border-2 border-zircon h-80 rounded-md w-full"
      href={link}
      target="_blank"
      title={title}
    >
      <img
        className="h-full max-h-full max-w-full object-fill rounded-md w-full"
        alt={altText}
        src={src}
      />
    </a>
  );
}

export default ProjectLink;
