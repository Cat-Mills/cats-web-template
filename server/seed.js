import connectToDB from "./db.js";
import bcrypt from "bcryptjs";
import { User, Band, Like, Event, Hero, Article } from "./model.js";

const db = await connectToDB("postgresql:///backwalldb");

await db.sync({ force: true }).then(async () => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync("test", salt);

  const users = [
    {
      username: "admin",
      // email: "admin@test.com",
      password: hash,
      adminStatus: true,
      bandStatus: false,
    },
    {
      username: "band1",
      // email: "band1@test.com",
      password: hash,
      adminStatus: false,
      bandStatus: true,
    },
    {
      username: "jack",
      // email: "ball.jack2376@gmail.com",
      password: hash,
      adminStatus: true,
      bandStatus: true,
    },
  ];

  const bands = [
    {
      bandName: "Moon Owls Mages",
      bio: "4 piece psych-rock from Boise",
    },
    {
      bandName: "Crush the Monster",
      bio: "6 piece psych-metal from Boise",
    },
  ];

  const events = [
    {
      date: "2023-12-25",
      location: "SLC",
      time: "20:00",
      description: "should be a really nice time",
      bands: ["Moon Owls Mages", "others"],
      links: "tickets.com",
      isSoldOut: false,
    },
    {
      date: "2023-11-05",
      location: "Seattle",
      time: "20:00",
      description: "should be a really nice time",
      bands: ["Moon Owls Mages", "Crush the Monster"],
      links: "tickets.com",
      isSoldOut: false,
    },
    {
      date: "2023-10-31",
      location: "Boise",
      time: "20:00",
      description: "should be a really nice time",
      bands: ["Crush the Monster", "Others"],
      links: "tickets.com",
      isSoldOut: true,
    },
  ];

  const heros = [
    {
      imgUrl:
        "https://bw-records-bucket.s3.us-west-1.amazonaws.com/MOM+Inside-32.jpg",
      cta: "Moon Owl's Mages at Neurolux",
      button: "Get Tickets",
      link: "https://www.ticketweb.com/venue/neurolux-lounge-boise-id/18976?page=1",
    },
    {
      imgUrl:
        "https://bw-records-bucket.s3.us-west-1.amazonaws.com/CTM+band+img.jpeg",
      cta: "Latest Release - Crush The Monster",
      button: "Listen",
      link: "https://open.spotify.com/album/7IzhE1aJFBUVGWVvH0gSsE?si=A2zl0qSbTdqqcKSS9NEZcg",
    },
  ];

  const articles = [
    {
      title: "This is Back Wall Records",
      imgUrl: "https://bw-records-bucket.s3.us-west-1.amazonaws.com/backwallrecords-text-logo.png",
      date: "03/17/2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque?"
    },
    {
      title: "Excited for the new EP",
      imgUrl: "https://bw-records-bucket.s3.us-west-1.amazonaws.com/CTM+sunset.jpg",
      date: "06/03/2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate."
    },
    {
      title: "Crazy gig last night",
      imgUrl: "https://bw-records-bucket.s3.us-west-1.amazonaws.com/MOM+in+Everett.jpg",
      date: "08/14/2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate."
    },
    {
      title: "What we're up to this halloween season",
      imgUrl: "https://bw-records-bucket.s3.us-west-1.amazonaws.com/MOM+wizards.jpg",
      date: "10/01/2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque?"
    },
    {
      title: "Come see us at The Depot!",
      imgUrl: "https://bw-records-bucket.s3.us-west-1.amazonaws.com/MOM+Projector-Mode-10-small.jpg",
      date: "10/06/2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque?"
    },
    {
      title: "Making of the new album!",
      imgUrl: "https://bw-records-bucket.s3.us-west-1.amazonaws.com/IWIL+album1.jpg",
      date: "10/20/2023",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero reiciendis sapiente fugit nemo non. Nisi accusantium placeat nostrum sint! Porro alias minima aliquam facilis expedita eveniet nobis, voluptatem repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit.Recusandae ipsam nulla quod? Sunt libero vero quasi ipsum doloremque atque harum! Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Officia voluptatibus voluptates provident necessitatibus explicabo quis fuga assumenda cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corrupti, perferendis.Unde iure exercitationem repudiandae possimus doloribus magnam enim quasi laudantium voluptates, est illum pariatur inventore, nulla accusantium sapiente rerum atque?"
    },
  ];

  await Like.bulkCreate([
    {
      userId: 3,
      bandId: 1,
    },
    {
      userId: 4,
      bandId: 2,
    },
  ]);

  await User.bulkCreate(users);
  await Band.bulkCreate(bands);
  await Event.bulkCreate(events);
  await Hero.bulkCreate(heros);
  await Article.bulkCreate(articles);
  await console.log("db has been successfully reset and seeded!");
});
