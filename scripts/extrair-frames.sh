#!/usr/bin/env bash
# Regera as imagens do site a partir do vídeo oficial do empreendimento.
# Uso: ./scripts/extrair-frames.sh caminho/para/video-original.mp4
set -euo pipefail

SRC="${1:?informe o caminho do vídeo original (2560x1440)}"
OUT="public/img"
FF="${FFMPEG:-ffmpeg}"

grab () {
  "$FF" -v error -ss "$1" -i "$SRC" -vframes 1 \
    -vf "scale=1800:-1:flags=lanczos" -q:v 3 -y "$OUT/$2"
  echo "  $2  (t=$1s)"
}

echo "Extraindo renders para $OUT/"
grab 0.6 fachada-rua.jpg
grab 1.9 torre-entardecer.jpg
grab 2.9 torre-aerea.jpg
grab 3.7 piscina-deck.jpg
grab 5.5 living-interior.jpg
grab 6.6 varanda-suite.jpg
grab 7.3 living-vista-mar.jpg
grab 9.6 torre-frontal.jpg

# O texto "SKY HOUSE" do vídeo entra em 9,85s — o corte em 9,8s para antes dele,
# porque o letreiro do site é montado em HTML, com o nome correto.
echo "Gerando vídeo de entrada (corte em 9.8s)"
"$FF" -v error -i "$SRC" -t 9.8 -an -vf "scale=1920:1080:flags=lanczos" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart \
  -y public/media/skyglasses-intro.mp4
"$FF" -v error -i "$SRC" -t 9.8 -an -vf "scale=1280:720:flags=lanczos" \
  -c:v libx264 -preset slow -crf 30 -pix_fmt yuv420p -movflags +faststart \
  -y public/media/skyglasses-intro-mobile.mp4
"$FF" -v error -ss 9.7 -i "$SRC" -vframes 1 -vf "scale=1920:-1" -q:v 3 \
  -y "$OUT/intro-poster.jpg"

echo "Pronto."
