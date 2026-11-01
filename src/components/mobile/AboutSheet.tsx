import styled from "styled-components";
import aboutText from "../Modal/AboutText";
import MobileSheet from "./MobileSheet";

const Photo = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
  display: block;
`;

const AboutPre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: "Instrument Serif", serif;
  font-size: 17px;
  line-height: 1.5;
  color: #333;
  margin: 0 0 20px;
`;

const Playlist = styled.iframe`
  width: 100%;
  height: 152px;
  border: 0;
  border-radius: 12px;
`;

export default function AboutSheet({ onClose }: { onClose: () => void }) {
  return (
    <MobileSheet title="about me" onClose={onClose}>
      <Photo src="/images/icon_ic.jpeg" alt="A photo of me" />
      <AboutPre>{aboutText}</AboutPre>
      <Photo src="/images/guts.jpeg" alt="More of me" />
      <Playlist
        src="https://open.spotify.com/embed/track/2lljt2vIqFChSGcEn319iU?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </MobileSheet>
  );
}
