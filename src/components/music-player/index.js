import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import {
  Container,
  Cover,
  Header,
  SubTitle,
  Title,
  Seekbar,
  Progress,
  PlayerContainer,
  ControllerIcons,
  SideIcons,
  MusicController,
  PlayPauseIcon,
} from "./styles";

import OptionsIcon from "../../assets/options.png";
import BackIcon from "../../assets/back.svg";
import PlayIcon from "../../assets/play.png";
import PauseIcon from "../../assets/pause.png";
import NextIcon from "../../assets/next.svg";
import SoundIcon from "../../assets/sound.png";
import { useDevice } from "../../config/custom-hooks/useDevice";
import FullScreenDialog from "../fullscreen-dialog";
import ThreeLineButtonComponent from "../options-button";

const MusicPlayer = ({
  selectedSong,
  handleNext,
  handlePrevious,
  MusicFinderDialog,
  color,
  showSongs,
  setShowSongs,
  selectedPlaylistId,
}) => {
  const [play, { pause, stop, sound, duration }] = useSound(selectedSong?.url);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [prevProgress, setPrevProgress] = useState(0);
  const deviceType = useDevice();

  useEffect(() => {
    if (sound) {
      pauseMusic();
      stopMusic();
    }
    playMusic();
    setProgress(0);
    setPrevProgress(0);
  }, [selectedSong]);

  useEffect(() => {
    playMusic();
    const interval = setInterval(() => {
      if (sound) {
        const seekPercentage = (sound.seek() / (duration / 1000)) * 100;
        setPrevProgress(progress);
        setProgress(seekPercentage);
        if (prevProgress === seekPercentage) {
          sound?.seek(0);
          playMusic();
        }
      }
    }, 300);
    return () => clearInterval(interval);
  }, [sound, duration]);

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const handleSeek = (event) => {
    const seekPercentage = Number(event.target.value);
    const seekTime = (seekPercentage / 100) * (duration / 1000);
    setProgress(seekPercentage);
    onSeek(seekTime);
  };

  const onSeek = (seekTime) => {
    if (sound) {
      sound.seek(seekTime);
    }
  };

  const pauseMusic = () => {
    pause();
    setIsPlaying(false);
  };

  const playMusic = () => {
    play();
    setIsPlaying(true);
  };

  const stopMusic = () => {
    stop();
    setIsPlaying(false);
  };

  return (
    <Container deviceType={deviceType}>
      <Header>
        <Title>{selectedSong?.title}</Title>
        <SubTitle>{selectedSong?.artist}</SubTitle>
      </Header>
      <Cover src={selectedSong?.photo} alt="album-cover" />
      <Seekbar>
        <Progress style={{ width: `${progress}%` }} />
        <input
          type="range"
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={handleSeek}
        />
      </Seekbar>

      <PlayerContainer>
        <SideIcons onClick={() => {}} src={OptionsIcon} alt="options" />
        <MusicController>
          <ControllerIcons
            onClick={handlePrevious}
            src={BackIcon}
            alt="previous"
          />
          <PlayPauseIcon
            onClick={handlePlayPause}
            src={isPlaying ? PauseIcon : PlayIcon}
            alt="play-pause"
          />
          <ControllerIcons onClick={handleNext} src={NextIcon} alt="next" />
        </MusicController>
        <SideIcons src={SoundIcon} alt="sound" />
      </PlayerContainer>
      <FullScreenDialog
        open={showSongs}
        setOpen={setShowSongs}
        color={color}
        MusicFinderDialog={MusicFinderDialog}
        selectedPlaylistId={selectedPlaylistId}
      />
    </Container>
  );
};

export default MusicPlayer;
