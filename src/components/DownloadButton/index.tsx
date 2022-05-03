import { Container } from "./styles";

type DownloadButtonProps = {
  content: string;
};

export default function DownloadButton({ content }: DownloadButtonProps) {
  return <Container href="/download">{content}</Container>;
}
