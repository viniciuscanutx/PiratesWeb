import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './Player.css';

const Player = () => {
  const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const videoApiUrl = `https://web-films-api.vercel.app/${id}`; 

    fetch(videoApiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar o vídeo');
        }
        return response.json();
      })
      .then(data => {
        setVideoUrl(data.link); 
        setTitle(data.titulo);
        setLoading(false); 
      })
      .catch(error => {
        setError("Não foi possível carregar o vídeo.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p></p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="player-container">
      <h2>{title}</h2>
      {videoUrl ? (
        <div className="iframe-container">
          <iframe
            src={videoUrl}
            title={title}
            width="1280"
            height="720px"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>O filme não está disponível.</p>
      )}
    </div>
  );
};

export default Player;
