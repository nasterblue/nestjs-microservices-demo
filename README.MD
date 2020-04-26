```bash
brew install rabbitmq
brew services start rabbitmq


brew install redis
brew services start redis



brew install mosquitto
brew services start mosquitto


brew cask install java
brew install kafka
brew services start kafka

brew services stop redis
brew services stop mosquitto
brew services stop rabbitmq




docker run -d --hostname localhost --name some-rabbit rabbitmq:3
docker run -d --hostname my-rabbit --name some-rabbit  rabbitmq:3-management
```