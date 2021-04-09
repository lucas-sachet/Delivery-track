<!-- BADGES -->

<p align="center">
    <a href="https://github.com/lucas-sachet/Delivery-track/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/lucas-sachet/Delivery-track" /></a>
    <a href="https://github.com/lucas-sachet/Delivery-track/network/members">
        <img src="https://img.shields.io/github/forks/lucas-sachet/Delivery-track?style=social"
            alt="fork"></a>
    <a href="https://github.com/lucas-sachet/Delivery-track/stargazers">
        <img src="https://img.shields.io/github/stars/lucas-sachet/Delivery-track?style=social"
            alt="stars"/></a>
    <a href="https://github.com/lucas-sachet/Delivery-track/issues">
        <img src="https://img.shields.io/github/issues/lucas-sachet/Delivery-track"
            alt="issues"></a>
    <a href="https://github.com/lucas-sachet/Delivery-track/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/lucas-sachet/Delivery-track"
            alt="license"></a>
  <a href="https://www.linkedin.com/in/lucas-sachet/">
        <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&&logo=linkedin&colorB=555"
            alt="linkedin"></a>
</p>


<!-- PROJECT LOGO -->
<br />

<h3 align="center">Live Delivery track</h3>
<p align="center">
    This is an application that visualizes live tracking of deliveries through a map
 </p>

![gif](https://github.com/lucas-sachet/Delivery-track/blob/master/delivery-gif.gif)
 

  <p align="center">
    <br />
    <a href="https://github.com/lucas-sachet/Delivery-track"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/lucas-sachet/Delivery-track/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucas-sachet/Delivery-track/issues">Request Feature</a>
  </p>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- Explanation of what was created and learned during the process -->

### Built With

Simulator(multithreads): <br />
[GoLang](https://golang.org/) <br /> <br />
Front-end: <br />
[React.js](https://reactjs.org/) <br /> <br />
Back-end: <br />
[Nest.js](https://https://nestjs.com/) <br />
[MongoDB](https://www.mongodb.com/) <br /> <br />
Server streaming: <br />
[Kafka](https://kafka.apache.org/) <br /> <br />
Data visualization: <br />
[Elasticsearch & Kibana](https://www.elastic.co/kibana) <br /> <br />
Containers: <br />
[Docker](https://www.docker.com/) <br /> <br />
 




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You need the following to be installed in order to make everything work

* npm
  ```sh
  npm install npm@latest -g
  ```
* node
 [NodeJs](https://nodejs.org/en/download/)
* docker
 [Docker](https://www.docker.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lucas-sachet/Delivery-track.git
   ```
2. Install images and containers in /nest-api; /react-frontend; /simulator and /simulator/infra/kafka
   ```sh
   docker-compose up
   ```
3. Config /etc/hosts
    Communication between applications takes place directly through the machine's network.
    For this, it is necessary to configure an address that all Docker containers can access.
    add in yours /etc/hosts ( path for windows: C:\Windows\system32\drivers\etc\hosts)
    ```sh
    127.0.0.1 host.docker.internal
    ```
    In all operating systems it is necessary to open the program to edit * hosts * as Administrator of the machine or root.



<!-- USAGE EXAMPLES -->
## Usage

After all docker containers are up ( backend,frontend,kafka,simulator ) 
```
docker-compose up
```
# go to container simulator
```
docker-compose exec app bash
```
# run the Golang app
```
go run main.go
```
and everything should be working in the frontend app
```
localhost:3031
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/lucas-sachet/Delivery-track/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
[LICENSE](https://github.com/lucas-sachet/Delivery-track/blob/master/LICENSE)



<!-- CONTACT -->
## Contact

Lucas Sachet - lucasachet@gmail.com

Project Link: [Delivery live track](https://github.com/lucas-sachet/Delivery-track)
