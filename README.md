# Bot for send me notifications about crypto

## Technologies I have used

- Deno
- Telegram API
- Velociraptor CLI

## Setup

```bash
$ cd ./telegram-cryptocurrency-bot
$ deno install -qAn vr https://deno.land/x/velociraptor@1.4.0/cli.ts
$ vr dev
```

## Info

This bot is running on an EC2 instance (AWS)

### To Do:

- [x] Make request every 10 minutes about cryptocurrency (DAI) for price

- [ ] Make daily request for check price of DAI and send me a message
