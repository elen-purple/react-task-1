export const WebsiteLink = ({ link }) => {
  return (
    <a target="_blank" href={link.href}>
      {link.text}
    </a>
  );
};
