# test-fe-salt
Technical Test FE Salt.id

# Cara Run
1. untuk mode development : 'npm run dev' atau 'yarn dev'
2. untuk mode Production : 'npm run start' atau 'yarn start'

* untuk lebih aman biasanya di 'yarn install' terlebih dahulu

# Referensi API
Source : http://api.tvmaze.com

# API yang digunakan :

1. Api daftar Film Batman : https://api.tvmaze.com/search/shows?q=batman
  call api ini ada di folder containers => organism => mainVideosView dan activityView

2. Api daftar cast : http://api.tvmaze.com/shows/1/cast
  call api ini ada di folder containers => organism => mainChannelView

3. Api daftar Episode : http://api.tvmaze.com/seasons/1/episodes
  call api ini ada di folder containers => organism => channelView

4. Api daftar Schedule : http://api.tvmaze.com/schedule
  call api ini ada di folder containers => organism => mainDocumentView
