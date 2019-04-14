import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  shadow-sm">
            <h5 class="my-0  mr-2 font-weight-normal logo ">
              Movie Trailers
            </h5>
            <a class="btn btn-outline-primary ml-1 active text-uppercase" href="#">Comming Soon</a>
            <a class="btn btn-outline-primary ml-1 mr-auto text-uppercase" href="#">Showing Now</a>
            <nav class="my-2 my-md-0 mr-md-3 d-flex ">
              <select class="custom-select">
                <option selected="">Popular</option>
                <option value="1">Relevance</option>
                <option value="2">New</option>
                <option value="3">Hot</option>
              </select>
              <select class="custom-select">
                <option selected="">English</option>
                <option value="1">Tamil</option>
                <option value="2">Kannada</option>
                <option value="3">Hindi</option>
              </select>
              <select class="custom-select">
                <option selected="">All Genres</option>
                <option value="1">Horror</option>
                <option value="2">Action</option>
                <option value="3">Animation</option>
              </select>
            </nav>
            <a class="btn btn-outline-primary" href="#">X</a>
          </div>
        </header>
        <div class="container-fluid greybg">
          <div id="movieList">
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071990" data-v="https://www.youtube.com/watch?v=SXYxOCLc9-c"
                  data-title="Notebook" data-genre="Drama|Romance" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093903.jpg" class="img-fluid" />
                  <p>Notebook</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00045309" data-v="https://www.youtube.com/watch?v=tcsJ-3GLDE4"
                  data-title="Junglee" data-genre="Action|Adventure|Thriller" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00065129.jpg" class="img-fluid" />
                  <p>Junglee</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076695" data-v="https://www.youtube.com/watch?v=iCzhNJZDv6k"
                  data-title="Ram Ki Janmabhoomi" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098844.jpg" class="img-fluid" />
                  <p>Ram Ki Janmabhoomi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076279" data-v="https://www.youtube.com/watch?v=qVft5cK4WN4"
                  data-title="Gone Kesh" data-genre="Comedy|Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098458.jpg" class="img-fluid" />
                  <p>Gone Kesh</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00036809" data-v="https://www.youtube.com/watch?v=kE_B6EVCySQ"
                  data-title="Dumbo" data-genre="Adventure|Family|Fantasy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00055829.jpg" class="img-fluid" />
                  <p>Dumbo</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00034728"
                  data-v="https://www.youtube.com/watch?v=A8IxhVslvro&amp;feature=youtu.be" data-title="Hotel Mumbai"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00053543.jpg" class="img-fluid" />
                  <p>Hotel Mumbai</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075658"
                  data-v="https://www.youtube.com/watch?v=P3dz45dLKw8&amp;feature=youtu.be" data-title="The Least Of These"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097770.jpg" class="img-fluid" />
                  <p>The Least Of These</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076421" data-v="https://www.youtube.com/watch?v=5cJ7MT1RTqs&amp;t=47s"
                  data-title="Five Feet Apart " data-genre="Drama|Romance" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098578.jpg" class="img-fluid" />
                  <p>Five Feet Apart </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076973" data-v="https://www.youtube.com/watch?v=IRG_el_OpQg"
                  data-title="Dragon Ball Super: Broly" data-genre="Action|Adventure|Animation" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099383.jpg" class="img-fluid" />
                  <p>Dragon Ball Super: Broly</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077094"
                  data-v="https://www.youtube.com/watch?v=K3LWFcL9mes&amp;feature=youtu.be&amp;list=PLBrhx5xd93JUDBPJtySX3moG-s2fVSrXK"
                  data-title="Us" data-genre="Horror|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099516.jpg" class="img-fluid" />
                  <p>Us</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00048673" data-v="https://www.youtube.com/watch?v=3-Xq_Zz3nPA"
                  data-title="Super Deluxe" data-genre="Action|Drama|Thriller" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00068614.jpg" class="img-fluid" />
                  <p>Super Deluxe</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077196" data-v="https://www.youtube.com/watch?v=aLzYyK8gPSI"
                  data-title="Final Score" data-genre="Action|Drama|Thriller" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099648.jpg" class="img-fluid" />
                  <p>Final Score</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073791" data-v="https://www.youtube.com/watch?v=9XAlqhGvvvk"
                  data-title="Ninnu Thalachi" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095618.jpg" class="img-fluid" />
                  <p>Ninnu Thalachi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043241"
                  data-v="https://www.youtube.com/watch?v=WbtiDxR1DZY&amp;feature=youtu.be" data-title="Lakshmi" s=""
                  data-genre="Biography|Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00062836.jpg" class="img-fluid" />
                  <p>Lakshmi's NTR</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00070519" data-v="https://www.youtube.com/watch?v=xQXPitdbP5o"
                  data-title="Operation Gold Fish" data-genre="Action" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00092390.jpg" class="img-fluid" />
                  <p>Operation Gold Fish</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076705"
                  data-v="https://www.youtube.com/watch?v=uRioikflQRI&amp;feature=youtu.be" data-title="Prema Antha Easy Kadu"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098850.jpg" class="img-fluid" />
                  <p>Prema Antha Easy Kadu</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00069816" data-v="https://www.youtube.com/watch?v=nEBGu3Lqv2A"
                  data-title="Suryakantham" data-genre="Comedy|Romance" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00091652.jpg" class="img-fluid" />
                  <p>Suryakantham</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075000" data-v="https://www.youtube.com/watch?v=YDFUuV72lSo"
                  data-title="Aamhi Befikar" data-genre="Drama|Romance" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097074.jpg" class="img-fluid" />
                  <p>Aamhi Befikar</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071491" data-v="https://www.youtube.com/watch?v=_5fWRF8PwIQ"
                  data-title="D/O Parvathamma" data-genre="Thriller" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093357.jpg" class="img-fluid" />
                  <p>D/O Parvathamma</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073423" data-v="https://www.youtube.com/watch?v=PaBkbrnYmMA"
                  data-title="Kiss" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095237.jpg" class="img-fluid" />
                  <p>Kiss</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00064160"
                  data-v="https://www.youtube.com/watch?v=fmp9gUXxHws&amp;feature=youtu.be" data-title="Panchatantra"
                  data-genre="Action|Drama|Romance" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00085301.jpg" class="img-fluid" />
                  <p>Panchatantra</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071987" data-v="https://www.youtube.com/watch?v=XaOYH4esDTE"
                  data-title="Londonalli Lambodhara" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093896.jpg" class="img-fluid" />
                  <p>Londonalli Lambodhara</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076479" data-v="https://www.youtube.com/watch?v=jTXtHeFKm8o"
                  data-title="Ravi History" data-genre="Drama|Romance" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098633.jpg" class="img-fluid" />
                  <p>Ravi History</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077157" data-v="https://www.youtube.com/watch?v=LteBUZFxCoU"
                  data-title="Rugged" data-genre="Action|Romance" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099585.jpg" class="img-fluid" />
                  <p>Rugged</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077155"
                  data-v="https://www.youtube.com/watch?v=yvgqjtzHWMM&amp;feature=youtu.be" data-title="Gandada Kudi"
                  data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099581.jpg" class="img-fluid" />
                  <p>Gandada Kudi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071219"
                  data-v="https://www.youtube.com/watch?v=3TrC3QdstIo&amp;feature=youtu.be" data-title="Ranaranaka"
                  data-genre="Drama|Romance" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093045.jpg" class="img-fluid" />
                  <p>Ranaranaka</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077284" data-v="https://www.youtube.com/watch?v=v9svpJM92ug"
                  data-title="Yada Yada Hi Dharmasya" data-genre="Action|Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099713.jpg" class="img-fluid" />
                  <p>Yada Yada Hi Dharmasya</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074304" data-v="https://www.youtube.com/watch?v=_GRj61OrGHs"
                  data-title="Rabb Da Radio 2" data-genre="Drama|Family" data-language="Punjabi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096383.jpg" class="img-fluid" />
                  <p>Rabb Da Radio 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074749"
                  data-v="https://www.youtube.com/watch?v=nSy__NQ-J8s&amp;feature=youtu.be" data-title="Sweater"
                  data-genre="Drama|Family" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096813.jpg" class="img-fluid" />
                  <p>Sweater</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075695" data-v="https://www.youtube.com/watch?v=NmaNXsSOLAM"
                  data-title="Googly" data-genre="Comedy|Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097791.jpg" class="img-fluid" />
                  <p>Googly</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076978" data-v="https://www.youtube.com/watch?v=OyLWXtKrMQ4"
                  data-title="Kia And Cosmos" data-genre="Drama|Mystery" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099389.jpg" class="img-fluid" />
                  <p>Kia And Cosmos</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077027" data-v="https://www.youtube.com/watch?v=jdQrmGPvApo"
                  data-title="Katapadi Kattappa" data-genre="Action|Drama" data-language="Tulu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099434.jpg" class="img-fluid" />
                  <p>Katapadi Kattappa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077192" data-v="https://www.youtube.com/watch?v=qlWmszaDP1w"
                  data-title="Biju Babu" data-genre="Drama" data-language="Odia">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099645.jpg" class="img-fluid" />
                  <p>Biju Babu</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074853" data-v="https://www.youtube.com/watch?v=M0uQsv37CdY"
                  data-title="Chousar Firangi" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096913.jpg" class="img-fluid" />
                  <p>Chousar Firangi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00036340"
                  data-v="https://www.youtube.com/watch?v=HSHjC8VdzCM&amp;feature=youtu.be" data-title="Romeo Akbar Walter"
                  data-genre="Action|Thriller" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00055220.jpg" class="img-fluid" />
                  <p>Romeo Akbar Walter</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052847"
                  data-v="https://www.youtube.com/watch?v=EzQ9DWkNAMg&amp;feature=youtu.be" data-title="Shazam!"
                  data-genre="Action|Adventure" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072971.jpg" class="img-fluid" />
                  <p>Shazam!</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076854"
                  data-v="https://www.youtube.com/watch?v=bUkR6395p44&amp;feature=youtu.be" data-title="No Fathers in Kashmir"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099262.jpg" class="img-fluid" />
                  <p>No Fathers in Kashmir</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071261" data-v="https://www.youtube.com/watch?v=AZCJEgCH5Pk"
                  data-title="Majili" data-genre="Drama|Romance" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093077.jpg" class="img-fluid" />
                  <p>Majili</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00070556" data-v="https://www.youtube.com/watch?v=RJcXjj3EzfI"
                  data-title="Prema Katha Chitram 2" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00092426.jpg" class="img-fluid" />
                  <p>Prema Katha Chitram 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00036187" data-v="https://www.youtube.com/watch?v=CBH6tNnmd0w"
                  data-title="Voter" data-genre="Thriller" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00055069.jpg" class="img-fluid" />
                  <p>Voter</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052550" data-v="https://www.youtube.com/watch?v=0FBEFnGT8Bk"
                  data-title="Sorry" data-genre="Drama|Family|Fantasy" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072695.jpg" class="img-fluid" />
                  <p>Sorry</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073384" data-v="https://www.youtube.com/watch?v=bbIxI1EICEA"
                  data-title="Saavat" data-genre="Supernatural" thriller="" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095216.jpg" class="img-fluid" />
                  <p>Saavat</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00059202"
                  data-v="https://www.youtube.com/watch?v=ftKunBkf0fI&amp;feature=youtu.be" data-title="Kavacha"
                  data-genre="Action|Crime|Thriller" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00079741.jpg" class="img-fluid" />
                  <p>Kavacha</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075894" data-v="https://www.youtube.com/watch?v=6Tswj6qhzis"
                  data-title="Yaara Ve" data-genre="Drama" data-language="Punjabi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098031.jpg" class="img-fluid" />
                  <p>Yaara Ve</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075208" data-v="https://www.youtube.com/watch?v=vKhF-yakMNg"
                  data-title="Blackboard VS Whiteboard" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097286.jpg" class="img-fluid" />
                  <p>Blackboard VS Whiteboard</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060465" data-v="https://www.youtube.com/watch?v=HEXUOwwk15Q"
                  data-title="Marudhar Express" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081059.jpg" class="img-fluid" />
                  <p>Marudhar Express</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076497" data-v="https://www.youtube.com/watch?v=27Gi5SIT5lg"
                  data-title="Paharganj" data-genre="Drama|Thriller" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098659.jpg" class="img-fluid" />
                  <p>Paharganj</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075982" data-v="https://www.youtube.com/watch?v=XXtMTzoWO1U"
                  data-title="Albert Pinto Ko Gussa Kyun Aata Hai" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098114.jpg" class="img-fluid" />
                  <p>Albert Pinto Ko Gussa Kyun Aata Hai</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076696" data-v="https://www.youtube.com/watch?v=4aENjEE7FCA"
                  data-title="Tarpan" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098846.jpg" class="img-fluid" />
                  <p>Tarpan</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071661"
                  data-v="https://www.youtube.com/watch?v=X6sjQG6lp8s&amp;feature=youtu.be" data-title="PM Narendra Modi"
                  data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093485.jpg" class="img-fluid" />
                  <p>PM Narendra Modi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049079" data-v="https://www.youtube.com/watch?v=OgWylHdfIdo"
                  data-title="The Tashkent Files" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069063.jpg" class="img-fluid" />
                  <p>The Tashkent Files</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076208"
                  data-v="https://www.youtube.com/watch?v=JEx_BMn4EMo&amp;feature=youtu.be" data-title="Hansa Ek Sanyog"
                  data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098360.jpg" class="img-fluid" />
                  <p>Hansa Ek Sanyog</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00066321" data-v="https://www.youtube.com/watch?v=uDOJiJoG618"
                  data-title="Hellboy" data-genre="Action|Adventure" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00087698.jpg" class="img-fluid" />
                  <p>Hellboy</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074656"
                  data-v="https://www.youtube.com/watch?v=qZ6Hfye5evM&amp;feature=youtu.be" data-title="Watchman"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096715.jpg" class="img-fluid" />
                  <p>Watchman</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072447" data-v="https://www.youtube.com/watch?v=yyYEX_Bk_L4"
                  data-title="Chitralahari" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094348.jpg" class="img-fluid" />
                  <p>Chitralahari</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073243"
                  data-v="https://www.youtube.com/watch?v=FOB-CcbdKS8&amp;feature=youtu.be" data-title="Wedding Cha Shinema"
                  data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095100.jpg" class="img-fluid" />
                  <p>Wedding Cha Shinema</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00047199" data-v="https://www.youtube.com/watch?v=PcoUv5qr38c"
                  data-title="Kavaludaari" data-genre="Thriller" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00067133.jpg" class="img-fluid" />
                  <p>Kavaludaari</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060877" data-v="https://www.youtube.com/watch?v=VobhXriUET8"
                  data-title="Madhuraraja" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081507.jpg" class="img-fluid" />
                  <p>Madhuraraja</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00062223" data-v="https://www.youtube.com/watch?v=BcLtt3oiMe8"
                  data-title="Manje Bistre 2 " data-genre="Drama" data-language="Punjabi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00082993.jpg" class="img-fluid" />
                  <p>Manje Bistre 2 </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074215" data-v="https://www.youtube.com/watch?v=9DxDZZMldV0"
                  data-title="Vinci Da" data-genre="Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096267.jpg" class="img-fluid" />
                  <p>Vinci Da</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054069"
                  data-v="https://www.youtube.com/watch?v=UmhXhTmP0a0&amp;app=desktop" data-title="Kalank"
                  data-genre="Drama|Period" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074273.jpg" class="img-fluid" />
                  <p>Kalank</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065310"
                  data-v="https://www.youtube.com/watch?v=-sdl1lKtcVg&amp;feature=youtu.be"
                  data-title="The Curse Of The Weeping Woman" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00086600.jpg" class="img-fluid" />
                  <p>The Curse Of The Weeping Woman</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076378" data-v="https://www.youtube.com/watch?v=8jNFAXZGSLc"
                  data-title="After" data-genre="Drama|Romance" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098532.jpg" class="img-fluid" />
                  <p>After</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071277" data-v="https://www.youtube.com/watch?v=9fXOrQFY_z8"
                  data-title="Sillu Karuppatti" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093087.jpg" class="img-fluid" />
                  <p>Sillu Karuppatti</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057633"
                  data-v="https://www.youtube.com/watch?v=Rl6T0bM94Qs&amp;feature=youtu.be" data-title="Jersey"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077973.jpg" class="img-fluid" />
                  <p>Jersey</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077117"
                  data-v="https://www.youtube.com/watch?v=2e1IgTzRi1s&amp;feature=youtu.be" data-title="Diksoochi"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099549.jpg" class="img-fluid" />
                  <p>Diksoochi</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073076" data-v="https://www.youtube.com/watch?v=UKrhPItPS8A"
                  data-title="Thrayambakam" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094926.jpg" class="img-fluid" />
                  <p>Thrayambakam</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073686"
                  data-v="https://www.youtube.com/watch?v=MzGGdZbGuuE&amp;feature=youtu.be" data-title="Paddehuli"
                  data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095508.jpg" class="img-fluid" />
                  <p>Paddehuli</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058609"
                  data-v="https://www.youtube.com/watch?v=TfVBjcE42h4&amp;feature=youtu.be" data-title="Gul Makai"
                  data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00079053.jpg" class="img-fluid" />
                  <p>Gul Makai</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00026686"
                  data-v="https://www.youtube.com/watch?v=ryLdvQlPch4&amp;feature=youtu.be" data-title="Sheene"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00044696.jpg" class="img-fluid" />
                  <p>Sheene</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00031475" data-v="https://www.youtube.com/watch?v=CL0yUbSS5Eg"
                  data-title="The Shack" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00050013.jpg" class="img-fluid" />
                  <p>The Shack</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00031797" data-v="https://www.youtube.com/watch?v=MyCuUr2_hmA"
                  data-title="The Wall" data-genre="Drama|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00050374.jpg" class="img-fluid" />
                  <p>The Wall</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00032375"
                  data-v="https://www.youtube.com/watch?v=rMkZ2frF_YM&amp;feature=youtu.be" data-title="War On Everyone"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00051151.jpg" class="img-fluid" />
                  <p>War On Everyone</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00040188" data-v="https://www.youtube.com/watch?v=MFOaolQR6jk"
                  data-title="Black Butterfly" data-genre="Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00055143.jpg" class="img-fluid" />
                  <p>Black Butterfly</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00028329" data-v="https://www.youtube.com/watch?v=diJ5wen9-y8"
                  data-title="The Extraordinary Journey of the Fakir" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00046426.jpg" class="img-fluid" />
                  <p>The Extraordinary Journey of the Fakir</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051193" data-v="https://www.youtube.com/watch?v=Z9AYPxH5NTM"
                  data-title="Call Me by Your Name" data-genre="Drama|Romance" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071212.jpg" class="img-fluid" />
                  <p>Call Me by Your Name</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058058"
                  data-v="https://www.youtube.com/watch?v=3MM8OkVT0hw&amp;feature=em-uploademail" data-title="The Hate U Give"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00078410.jpg" class="img-fluid" />
                  <p>The Hate U Give</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00016847" data-v="https://www.youtube.com/watch?v=W9uddyaqAPE"
                  data-title="Patient Zero" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00037176.jpg" class="img-fluid" />
                  <p>Patient Zero</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00068832"
                  data-v="https://www.youtube.com/watch?v=upLc-PnBAjY&amp;feature=youtu.be" data-title="Avengers: Endgame"
                  data-genre="Action|Adventure|Fantasy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00090482.jpg" class="img-fluid" />
                  <p>Avengers: Endgame</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00024126" data-v="https://www.youtube.com/watch?v=H6jXCfE_hQQ"
                  data-title="Enai Noki Paayum Thota" data-genre="Romance|Thriller" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00042077.jpg" class="img-fluid" />
                  <p>Enai Noki Paayum Thota</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00029506" data-v="https://www.youtube.com/watch?v=IWqeTxCdsrk"
                  data-title="KEE" data-genre="Psychological|Sci-Fi|Thriller" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00047733.jpg" class="img-fluid" />
                  <p>KEE</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00062860" data-v="https://www.youtube.com/watch?v=TMZdrjjMUOk"
                  data-title="Maragatha Kaadu" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00083831.jpg" class="img-fluid" />
                  <p>Maragatha Kaadu</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043093" data-v="https://www.youtube.com/watch?v=-LSzzQ0ZLiU"
                  data-title="Paris Paris" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00062525.jpg" class="img-fluid" />
                  <p>Paris Paris</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065544"
                  data-v="https://www.youtube.com/watch?v=2w3LSY9EALY&amp;feature=youtu.be" data-title="That is Mahalakshmi"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00087006.jpg" class="img-fluid" />
                  <p>That is Mahalakshmi</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065110" data-v="https://www.youtube.com/watch?v=KjCxfvPMoP8"
                  data-title="Viswamitra" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00086360.jpg" class="img-fluid" />
                  <p>Viswamitra</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065119" data-v="https://www.youtube.com/watch?v=g85Hd_lOc2g"
                  data-title="Hora" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00086381.jpg" class="img-fluid" />
                  <p>Hora</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077092" data-v="https://www.youtube.com/watch?v=3r4PT9jI8TM"
                  data-title="Rampaat" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099515.jpg" class="img-fluid" />
                  <p>Rampaat</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00045316" data-v="https://www.youtube.com/watch?v=DOQ7zXniTWc"
                  data-title="Butterfly" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00065142.jpg" class="img-fluid" />
                  <p>Butterfly</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00040286" data-v="https://www.youtube.com/watch?v=gEcu0cB0E7U"
                  data-title="Love, Action, Drama" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00059575.jpg" class="img-fluid" />
                  <p>Love, Action, Drama</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065545" data-v="https://www.youtube.com/watch?v=-TfzhiyJO78"
                  data-title="Zam Zam" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00087009.jpg" class="img-fluid" />
                  <p>Zam Zam</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073275"
                  data-v="https://www.youtube.com/watch?v=HH6tUTme6gA&amp;feature=youtu.be" data-title="Nadhoo Khan"
                  data-genre="Drama" data-language="Punjabi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095131.jpg" class="img-fluid" />
                  <p>Nadhoo Khan</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00063046"
                  data-v="https://www.youtube.com/watch?time_continue=5&amp;v=guG3IG8Oeyk" data-title="Unicorn"
                  data-genre="Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00084048.jpg" class="img-fluid" />
                  <p>Unicorn</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076792" data-v="https://www.youtube.com/watch?v=xcl4uDgPwAU"
                  data-title="Ke Tumi Nandini" data-genre="Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099181.jpg" class="img-fluid" />
                  <p>Ke Tumi Nandini</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074854" data-v="https://www.youtube.com/watch?v=SHB8EcnAG0k"
                  data-title="Mr. Local" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096915.jpg" class="img-fluid" />
                  <p>Mr. Local</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073765"
                  data-v="https://www.youtube.com/watch?v=d2KWht9u7Io&amp;feature=youtu.be" data-title="Arjun Suravaram"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095605.jpg" class="img-fluid" />
                  <p>Arjun Suravaram</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00066844" data-v="https://www.youtube.com/watch?v=RASfCuQuViI"
                  data-title="Uglydolls" data-genre="Adventure|Animation|Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00088254.jpg" class="img-fluid" />
                  <p>Uglydolls</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00036141" data-v="https://www.youtube.com/watch?v=NMRJTTMMmZw"
                  data-title="Sye Raa Narasimha Reddy" data-genre="Action|Drama|History" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00055035.jpg" class="img-fluid" />
                  <p>Sye Raa Narasimha Reddy</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060744"
                  data-v="https://www.youtube.com/watch?time_continue=1&amp;v=vhh8pT_Ivkg" data-title="Maharshi"
                  data-genre="Action|Drama|Romance" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081372.jpg" class="img-fluid" />
                  <p>Maharshi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076762"
                  data-v="https://www.youtube.com/watch?v=bL7NPK0xjoQ&amp;feature=youtu.be" data-title="BRIGHTBURN"
                  data-genre="Drama|Horror" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099131.jpg" class="img-fluid" />
                  <p>BRIGHTBURN</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00066878"
                  data-v="https://www.youtube.com/watch?v=hN6Uyzysm5U&amp;feature=youtu.be"
                  data-title="Pokemon Detective Pikachu" data-genre="Adventure|Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00088312.jpg" class="img-fluid" />
                  <p>Pokemon Detective Pikachu</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076738"
                  data-v="https://www.youtube.com/watch?v=majDfTGq2ZA&amp;feature=youtu.be" data-title="Anushka"
                  data-genre="Fantasy|Thriller" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098933.jpg" class="img-fluid" />
                  <p>Anushka</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073485"
                  data-v="https://www.youtube.com/watch?v=0AT-7qHB8b4&amp;feature=youtu.be"
                  data-title="The Sun Is Also A Star" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095270.jpg" class="img-fluid" />
                  <p>The Sun Is Also A Star</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074559" data-v="https://www.youtube.com/watch?v=Zx0RrhMece0"
                  data-title="The Hustle" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096587.jpg" class="img-fluid" />
                  <p>The Hustle</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00056911" data-v="https://www.youtube.com/watch?v=pU8-7BX9uxs"
                  data-title="John Wick: Chapter 3 - Parabellum" data-genre="Action|Crime|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077201.jpg" class="img-fluid" />
                  <p>John Wick: Chapter 3 - Parabellum</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00063529" data-v="https://www.youtube.com/watch?v=63EDaUjfVkQ"
                  data-title="Uriyadi 2" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00084565.jpg" class="img-fluid" />
                  <p>Uriyadi 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00064930" data-v="https://www.youtube.com/watch?v=foyufD52aog"
                  data-title="Aladdin" data-genre="Action|Adventure|Family|Fantasy|Musical" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00086118.jpg" class="img-fluid" />
                  <p>Aladdin</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076784"
                  data-v="https://www.youtube.com/watch?v=-uc0YFYYeCw&amp;feature=youtu.be" data-title="K 13"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099176.jpg" class="img-fluid" />
                  <p>K 13</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00044693" data-v="https://www.youtube.com/watch?v=iZbTLdDHRvs"
                  data-title="I, Tonya" data-genre="Biography|Comedy|Drama|Sports" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00064521.jpg" class="img-fluid" />
                  <p>I, Tonya</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00048778" data-v="https://www.youtube.com/watch?v=0Juc2cL26mg"
                  data-title="Winchester" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00068716.jpg" class="img-fluid" />
                  <p>Winchester</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00050410" data-v="https://www.youtube.com/watch?v=T1B1CxmAXLk"
                  data-title=" Life of the Party" data-genre="Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00070464.jpg" class="img-fluid" />
                  <p> Life of the Party</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00050583" data-v="https://www.youtube.com/watch?v=HEVonh8bjC0"
                  data-title="Disobedience" data-genre="Drama|Romance" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00070628.jpg" class="img-fluid" />
                  <p>Disobedience</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043097" data-v="https://www.youtube.com/watch?v=HkYdgseFza8"
                  data-title="White Boy Rick" data-genre="Crime|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00062532.jpg" class="img-fluid" />
                  <p>White Boy Rick</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00048674" data-v="https://www.youtube.com/watch?v=eRV-c3hs3vw"
                  data-title="Slender Man" data-genre="Horror|Mystery|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00068616.jpg" class="img-fluid" />
                  <p>Slender Man</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00050864" data-v="https://www.youtube.com/watch?v=xq-1Q1q_QPU"
                  data-title="I Kill Giants" data-genre="Fantasy|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00070897.jpg" class="img-fluid" />
                  <p>I Kill Giants</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00033850"
                  data-v="https://www.youtube.com/watch?v=z2mtgWpkQ3w&amp;feature=youtu.be"
                  data-title="Godzilla 2: King of the Monsters" data-genre="Action|Adventure" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00052615.jpg" class="img-fluid" />
                  <p>Godzilla 2: King of the Monsters</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057324" data-v="https://www.youtube.com/watch?v=S3vO8E2e6G0"
                  data-title="Rocketman" data-genre="Biography|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077538.jpg" class="img-fluid" />
                  <p>Rocketman</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060586" data-v="https://www.youtube.com/watch?v=hKHPhtoAiwg"
                  data-title="Peipasi" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081218.jpg" class="img-fluid" />
                  <p>Peipasi</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057726" data-v="https://www.youtube.com/watch?v=w5vPxAyaWZ8"
                  data-title="Gorilla" data-genre="Comedy" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00078128.jpg" class="img-fluid" />
                  <p>Gorilla</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051020"
                  data-v="https://www.youtube.com/watch?v=h6NMBnk-zL4&amp;feature=youtu.be" data-title="Asura Guru"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071036.jpg" class="img-fluid" />
                  <p>Asura Guru</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051871"
                  data-v="https://www.youtube.com/watch?feature=youtu.be&amp;v=rq08k_WxPK0&amp;app=desktop" data-title="NGK"
                  data-genre="Action|Thriller" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071916.jpg" class="img-fluid" />
                  <p>NGK</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00059553"
                  data-v="https://www.youtube.com/watch?v=yKkK68GF4AE&amp;feature=youtu.be" data-title="Pon Manickavel"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00080157.jpg" class="img-fluid" />
                  <p>Pon Manickavel</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049584" data-v="https://www.youtube.com/watch?v=I2VCd9284eU"
                  data-title="KEY" data-genre="Psychological|Sci-Fi|Thriller" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069544.jpg" class="img-fluid" />
                  <p>KEY</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00055213" data-v="https://www.youtube.com/watch?v=n3AqEHg6ofI"
                  data-title="Dear Comrade" data-genre="Action|Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00075421.jpg" class="img-fluid" />
                  <p>Dear Comrade</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076737" data-v="https://www.youtube.com/watch?v=6kXylDulnf"
                  data-title="Evvarikee Cheppoddu" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098934.jpg" class="img-fluid" />
                  <p>Evvarikee Cheppoddu</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00045364"
                  data-v="https://www.youtube.com/watch?time_continue=2&amp;v=P_u9pOGjBnE" data-title="Rabba Ishq Na Hove"
                  data-genre="Action|Drama|Romance" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00065164.jpg" class="img-fluid" />
                  <p>Rabba Ishq Na Hove</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00039357"
                  data-v="https://www.youtube.com/watch?v=1-q8C_c-nlM&amp;feature=youtu.be" data-title=" X-Men: Dark Phoenix"
                  data-genre="Action|Adventure|Sci-Fi" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00058524.jpg" class="img-fluid" />
                  <p> X-Men: Dark Phoenix</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00062251" data-v="https://www.youtube.com/watch?v=c25fphfyLwM"
                  data-title="Jhalki" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00083045.jpg" class="img-fluid" />
                  <p>Jhalki</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00048429" data-v="https://www.youtube.com/watch?v=Fxq18WuuRms"
                  data-title="Bharat" data-genre="Action|Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00068351.jpg" class="img-fluid" />
                  <p>Bharat</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00028417"
                  data-v="https://www.youtube.com/watch?v=wmiIUN-7qhE&amp;feature=youtu.be" data-title="Toy Story 4"
                  data-genre="Adventure|Animation|Comedy|Fantasy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00046525.jpg" class="img-fluid" />
                  <p>Toy Story 4</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054767" data-v="https://www.youtube.com/watch?v=sN5agcqLE5s"
                  data-title="Jio Baccho" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074967.jpg" class="img-fluid" />
                  <p>Jio Baccho</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00055859"
                  data-v="https://www.youtube.com/watch?v=Z1IxO4x6LzQ&amp;feature=youtu.be" data-title="10 Nahi 40"
                  data-genre="Drama|Social" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00076095.jpg" class="img-fluid" />
                  <p>10 Nahi 40</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00018926" data-v="https://www.youtube.com/watch?v=VNZEtLfShMQ"
                  data-title="Father Figures" data-genre="Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00038214.jpg" class="img-fluid" />
                  <p>Father Figures</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051203" data-v="https://www.youtube.com/watch?v=cMKX2tE5Luk&amp;t=15s"
                  data-title="The Disaster Artist" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071223.jpg" class="img-fluid" />
                  <p>The Disaster Artist</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051325" data-v="https://www.youtube.com/watch?v=bqZIo7MFV0w"
                  data-title="Kings" data-genre="Romance" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071367.jpg" class="img-fluid" />
                  <p>Kings</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052862" data-v="https://www.youtube.com/watch?v=FsBKWAU_388"
                  data-title="We Didn" t="" kill="" mia="" data-genre="Mystery" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072986.jpg" class="img-fluid" />
                  <p>We Didn't Kill Mia</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054776" data-v="https://www.youtube.com/watch?v=e5D3O4yCmCg"
                  data-title="Tully" data-genre="Comedy|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074971.jpg" class="img-fluid" />
                  <p>Tully</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054617" data-v="https://www.youtube.com/watch?v=Ac5wrM2uYbk"
                  data-title="Kin" data-genre="Action|Sci-Fi" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074819.jpg" class="img-fluid" />
                  <p>Kin</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052115" data-v="https://www.youtube.com/watch?v=JAwnkRhInwc&amp;t=36s"
                  data-title="The House of Tomorrow" data-genre="Comedy|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072202.jpg" class="img-fluid" />
                  <p>The House of Tomorrow</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052321" data-v="https://www.youtube.com/watch?v=ASR04zW4K8w"
                  data-title="The Little Stranger" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072463.jpg" class="img-fluid" />
                  <p>The Little Stranger</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057983"
                  data-v="https://www.youtube.com/watch?time_continue=1&amp;v=yzO9OCAW_7c" data-title="Reprisal"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00078353.jpg" class="img-fluid" />
                  <p>Reprisal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054256"
                  data-v="https://www.youtube.com/watch?v=wl_SoMNi0rw&amp;feature=youtu.be" data-title="Puzzle"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074430.jpg" class="img-fluid" />
                  <p>Puzzle</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052339" data-v="https://www.youtube.com/watch?v=UL29y0ah92w"
                  data-title="The First Purge" data-genre="Action|Horror" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072477.jpg" class="img-fluid" />
                  <p>The First Purge</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054663" data-v="https://www.youtube.com/watch?v=lOl-jySoseI"
                  data-title="Night School" data-genre="Comedy|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074877.jpg" class="img-fluid" />
                  <p>Night School</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00056841" data-v="https://www.youtube.com/watch?v=BV-WEb2oxLk"
                  data-title="Men in Black: International" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077157.jpg" class="img-fluid" />
                  <p>Men in Black: International</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067353"
                  data-v="https://www.youtube.com/watch?v=pKLGUuJftl0&amp;feature=youtu.be"
                  data-title="The Secret Life of Pets 2" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00088840.jpg" class="img-fluid" />
                  <p>The Secret Life of Pets 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052688"
                  data-v="https://www.youtube.com/watch?time_continue=2&amp;v=DiCgxyFxnbA" data-title="Vairii"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072856.jpg" class="img-fluid" />
                  <p>Vairii</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058621"
                  data-v="https://www.youtube.com/watch?v=jnzMPDKFpis&amp;feature=youtu.be" data-title="Naadodigal 2"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00079088.jpg" class="img-fluid" />
                  <p>Naadodigal 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057172" data-v="https://www.youtube.com/watch?v=E5pELCDq820"
                  data-title="Gypsy" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077389.jpg" class="img-fluid" />
                  <p>Gypsy</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051842" data-v="https://www.youtube.com/watch?v=8dBjt8nXByQ"
                  data-title="Neeya 2" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071907.jpg" class="img-fluid" />
                  <p>Neeya 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054489" data-v="https://www.youtube.com/watch?v=8_pjiHs20-0"
                  data-title="Tendlya" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074660.jpg" class="img-fluid" />
                  <p>Tendlya</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00056830" data-v="https://www.youtube.com/watch?v=p86oUHE2IFA"
                  data-title="Avane Srimannarayana" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077148.jpg" class="img-fluid" />
                  <p>Avane Srimannarayana</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057138"
                  data-v="https://www.youtube.com/watch?v=bi9qNf2lfnU&amp;feature=youtu.be"
                  data-title="Seethamma Bandalu Sirimallige Thottu" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077362.jpg" class="img-fluid" />
                  <p>Seethamma Bandalu Sirimallige Thottu</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00033292" data-v="https://www.youtube.com/watch?v=ys4lcI8LohI"
                  data-title="Moothon" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00052082.jpg" class="img-fluid" />
                  <p>Moothon</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074301" data-v="https://www.youtube.com/watch?v=I_ZTxEDUy3Q"
                  data-title="Jallianwala Bagh" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096380.jpg" class="img-fluid" />
                  <p>Jallianwala Bagh</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058711" data-v="https://www.youtube.com/watch?v=jib4NdXF5cg"
                  data-title="I Am The Night" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00079201.jpg" class="img-fluid" />
                  <p>I Am The Night</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058105" data-v="https://www.youtube.com/watch?v=DYYtuKyMtY8&amp;t=2s"
                  data-title="Spider-Man: Far From Home" data-genre="Action|Adventure|Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00078437.jpg" class="img-fluid" />
                  <p>Spider-Man: Far From Home</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067632" data-v="https://www.youtube.com/watch?v=4CbLXeGSDxg"
                  data-title="The Lion King" data-genre="Adventure|Animation|Fantasy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089130.jpg" class="img-fluid" />
                  <p>The Lion King</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051572" data-v="https://www.youtube.com/watch?v=8Nr7q7-3qOw"
                  data-title="Kaaliyan" data-genre="Drama|Period" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071631.jpg" class="img-fluid" />
                  <p>Kaaliyan</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00031370" data-v="https://www.youtube.com/watch?v=FMbAb-785vw"
                  data-title="Keep Watching" data-genre="Horror|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00049872.jpg" class="img-fluid" />
                  <p>Keep Watching</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00053894" data-v="https://www.youtube.com/watch?v=5Lxu75r3-kI"
                  data-title="Hobbs and Shaw" data-genre="Action|Adventure|Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074077.jpg" class="img-fluid" />
                  <p>Hobbs and Shaw</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057003" data-v="https://www.youtube.com/watch?v=OL1Wt732IbM&amp;t=3s"
                  data-title="Once Upon A Time In Hollywood" data-genre="Crime|Drama|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077261.jpg" class="img-fluid" />
                  <p>Once Upon A Time In Hollywood</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049650" data-v="https://www.youtube.com/watch?v=WjQXf6-xQP8"
                  data-title="Kaalidas" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069632.jpg" class="img-fluid" />
                  <p>Kaalidas</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060587"
                  data-v="https://www.youtube.com/watch?v=fjmFa9czif8&amp;feature=youtu.be" data-title="Porukkies"
                  data-genre="Comedy|Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081219.jpg" class="img-fluid" />
                  <p>Porukkies</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00056802"
                  data-v="https://www.youtube.com/watch?v=FHCNCt7Z19A&amp;feature=youtu.be" data-title="Devarattam"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077125.jpg" class="img-fluid" />
                  <p>Devarattam</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00070582" data-v="https://www.youtube.com/watch?v=gapmiNPjsuw"
                  data-title="Dimakhilal" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00092449.jpg" class="img-fluid" />
                  <p>Dimakhilal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043848" data-v="https://www.youtube.com/watch?v=Fc_bqycNy9U"
                  data-title="The New Mutants" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00063623.jpg" class="img-fluid" />
                  <p>The New Mutants</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00077158" data-v="https://www.youtube.com/watch?v=gUTtJjV852c"
                  data-title="Dora And The Lost City Of Gold" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099589.jpg" class="img-fluid" />
                  <p>Dora And The Lost City Of Gold</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067885" data-v="https://www.youtube.com/watch?v=zKh_B9w2Pa8"
                  data-title="Artemis Fowl" data-genre="Action|Adventure" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089430.jpg" class="img-fluid" />
                  <p>Artemis Fowl</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00037543" data-v="https://www.youtube.com/watch?v=Jln4eyvzMNg"
                  data-title="Saaho" data-genre="Action|Sci-Fi|Thriller" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00056595.jpg" class="img-fluid" />
                  <p>Saaho</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075033" data-v="https://youtu.be/K-C1ys02wlU"
                  data-title="Playmobil: The Movie" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097105.jpg" class="img-fluid" />
                  <p>Playmobil: The Movie</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074825"
                  data-v="https://www.youtube.com/watch?v=8aGq36Cf1qg&amp;feature=youtu.be" data-title="Viswadarshanam"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096880.jpg" class="img-fluid" />
                  <p>Viswadarshanam</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076817" data-v="https://www.youtube.com/watch?v=L3dsnExJFMU"
                  data-title="Jeem Boom Bhaa" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00099230.jpg" class="img-fluid" />
                  <p>Jeem Boom Bhaa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072758" data-v="https://www.youtube.com/watch?v=u0KX2F5vqLQ"
                  data-title="Rajeeva" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094562.jpg" class="img-fluid" />
                  <p>Rajeeva</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00062232" data-v="https://www.youtube.com/watch?v=MDQd_gaMGoI"
                  data-title="The Front Runner" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00083011.jpg" class="img-fluid" />
                  <p>The Front Runner</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052189"
                  data-v="https://www.youtube.com/watch?v=LSSGHvzMY60&amp;feature=youtu.be" data-title="Spies In Disguise"
                  data-genre="Action|Adventure|Animation" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072276.jpg" class="img-fluid" />
                  <p>Spies In Disguise</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076297" data-v="https://www.youtube.com/watch?v=AjM_bTcZ4Ng"
                  data-title="Sindhubaadh" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098478.jpg" class="img-fluid" />
                  <p>Sindhubaadh</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00037477" data-v="https://www.youtube.com/watch?v=eSLe4HuKuK0"
                  data-title="Frozen 2" data-genre="Animation|Drama|Fantasy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00056551.jpg" class="img-fluid" />
                  <p>Frozen 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067232" data-v="https://www.youtube.com/watch?v=qeNL9hktKG8"
                  data-title="Kadaram Kondan" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00088681.jpg" class="img-fluid" />
                  <p>Kadaram Kondan</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00068650" data-v="https://www.youtube.com/watch?v=go1jaIRQc-o"
                  data-title="Breakthrough" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00090284.jpg" class="img-fluid" />
                  <p>Breakthrough</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074832" data-v="https://www.youtube.com/watch?v=NiVlGGvmVks"
                  data-title="Ye Saccha Swabhimaan Sahi Sangharsh" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096893.jpg" class="img-fluid" />
                  <p>Ye Saccha Swabhimaan Sahi Sangharsh</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075242"
                  data-v="https://www.youtube.com/watch?v=at2vg9VRwds&amp;feature=youtu.be" data-title="Gang Leader"
                  data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097329.jpg" class="img-fluid" />
                  <p>Gang Leader</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076570" data-v="https://youtu.be/FZ0Auwf1ndA" data-title="Devaki"
                  data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098705.jpg" class="img-fluid" />
                  <p>Devaki</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00076730" data-v="https://www.youtube.com/watch?v=3BngM7meNu4"
                  data-title="Singa" data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00098917.jpg" class="img-fluid" />
                  <p>Singa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072539" data-v="https://www.youtube.com/watch?v=y6Wih23rUPY"
                  data-title="Kosrakollikal" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094405.jpg" class="img-fluid" />
                  <p>Kosrakollikal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00074637" data-v="https://www.youtube.com/watch?v=rN8EGlKa2HY"
                  data-title="Rajtilak" data-genre="Drama" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00096694.jpg" class="img-fluid" />
                  <p>Rajtilak</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00041621" data-v="https://www.youtube.com/watch?v=txspmR4ZivE"
                  data-title="Mangal Ho" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00060985.jpg" class="img-fluid" />
                  <p>Mangal Ho</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00040809" data-v="https://www.youtube.com/watch?v=cedDn2YPfHM"
                  data-title="Brij Mohan Amar Rahe" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00060131.jpg" class="img-fluid" />
                  <p>Brij Mohan Amar Rahe</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057121" data-v="https://www.youtube.com/watch?v=jw5dTVTX9zo"
                  data-title="Teefa In Trouble" data-genre="Action|Comedy|Romance" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077343.jpg" class="img-fluid" />
                  <p>Teefa In Trouble</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00062714"
                  data-v="https://www.youtube.com/watch?v=qKNy9gsP8wY&amp;feature=youtu.be"
                  data-title="Yeh Hai Paranormal Ishq" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00083643.jpg" class="img-fluid" />
                  <p>Yeh Hai Paranormal Ishq</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073017" data-v="https://www.youtube.com/watch?v=aaogRChM3TY"
                  data-title="Sridevi Bungalow" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094763.jpg" class="img-fluid" />
                  <p>Sridevi Bungalow</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00073524"
                  data-v="https://www.youtube.com/watch?v=tVzS8lYzeDA&amp;feature=youtu.be" data-title="The Pushkar Lodge"
                  data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00095317.jpg" class="img-fluid" />
                  <p>The Pushkar Lodge</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00027618" data-v="https://www.youtube.com/watch?v=OPMRZZnFCxU"
                  data-title="The Disappointments Room" data-genre="Horror|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00045666.jpg" class="img-fluid" />
                  <p>The Disappointments Room</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00031592" data-v="https://www.youtube.com/watch?v=X6K_M2FL71w"
                  data-title="The Ottoman Lieutenant" data-genre="Drama|Romance|War" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00050050.jpg" class="img-fluid" />
                  <p>The Ottoman Lieutenant</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00033433" data-v="https://www.youtube.com/watch?v=KXwFU-E9WPA"
                  data-title="All Nighter" data-genre="Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00052202.jpg" class="img-fluid" />
                  <p>All Nighter</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00032310" data-v="https://www.youtube.com/watch?v=QcyeYFXdHNQ"
                  data-title="Snatched" data-genre="Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00051097.jpg" class="img-fluid" />
                  <p>Snatched</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00029061" data-v="https://www.youtube.com/watch?v=xC8AjoqpBAY"
                  data-title="Personal Shopper" data-genre="Drama|Suspense|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00047185.jpg" class="img-fluid" />
                  <p>Personal Shopper</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00015663" data-v="https://www.youtube.com/watch?v=5AWP1K7FaFI"
                  data-title="Battle Of The Sexes" data-genre="Biography|Comedy|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00057371.jpg" class="img-fluid" />
                  <p>Battle Of The Sexes</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00042496" data-v="https://www.youtube.com/watch?v=wMECv6yLOFM"
                  data-title="The Current War" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00061877.jpg" class="img-fluid" />
                  <p>The Current War</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043100" data-v="https://www.youtube.com/watch?v=kQ1Zcv54USA"
                  data-title="Proud Mary" data-genre="Action|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00062554.jpg" class="img-fluid" />
                  <p>Proud Mary</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043411" data-v="https://www.youtube.com/watch?v=ERj3KafjfRk"
                  data-title="Crooked House" data-genre="Crime|Drama|Mystery" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00063031.jpg" class="img-fluid" />
                  <p>Crooked House</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043095" data-v="https://www.youtube.com/watch?v=comz38kRsb0"
                  data-title="Sherlock Gnomes" data-genre="Adventure|Animation|Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00062529.jpg" class="img-fluid" />
                  <p>Sherlock Gnomes</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00040508" data-v="https://www.youtube.com/watch?v=GBES_BIyyt8"
                  data-title="A Wrinkle in Time" data-genre="Adventure|Family|Fantasy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00059759.jpg" class="img-fluid" />
                  <p>A Wrinkle in Time</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051422" data-v="https://www.youtube.com/watch?v=RfFcaV5O7SU"
                  data-title="Blockers" data-genre="Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071460.jpg" class="img-fluid" />
                  <p>Blockers</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00030556" data-v="https://www.youtube.com/watch?v=OTu9N40E_MI&amp;t=1s"
                  data-title="Best F(R)Iends" data-genre="Drama|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00049072.jpg" class="img-fluid" />
                  <p>Best F(R)Iends</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052850" data-v="https://www.youtube.com/watch?v=HnmCOwVZXjg"
                  data-title="Terminal" data-genre="Drama|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072976.jpg" class="img-fluid" />
                  <p>Terminal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00053630" data-v="https://www.youtube.com/watch?v=1hTLGlgZ4Z8"
                  data-title="Upgrade" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00073829.jpg" class="img-fluid" />
                  <p>Upgrade</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00038170" data-v="https://www.youtube.com/watch?v=VTMGI2s5VNs"
                  data-title="A Kid Like Jake" data-genre="Drama|Family" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00057246.jpg" class="img-fluid" />
                  <p>A Kid Like Jake</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052813" data-v="https://www.youtube.com/watch?v=MQIvV800Atk"
                  data-title="Superfly" data-genre="Action|Crime|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072955.jpg" class="img-fluid" />
                  <p>Superfly</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00038899" data-v="https://www.youtube.com/watch?v=e4LfNLtVQqE"
                  data-title="The Little Mermaid" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00058086.jpg" class="img-fluid" />
                  <p>The Little Mermaid</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057001" data-v="https://www.youtube.com/watch?v=fz8nNAZ61y0"
                  data-title="Serenity" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077260.jpg" class="img-fluid" />
                  <p>Serenity</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058104" data-v="https://www.youtube.com/watch?v=sXvwFdTTwhI"
                  data-title="Blaze" data-genre="Biography|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00078436.jpg" class="img-fluid" />
                  <p>Blaze</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00059257" data-v="https://www.youtube.com/watch?v=rAqMlh0b2HU"
                  data-title="A Simple Favor" data-genre="Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00079789.jpg" class="img-fluid" />
                  <p>A Simple Favor</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049960" data-v="https://www.youtube.com/watch?v=USPd0vX2sdc"
                  data-title="Overlord" data-genre="Action|Horror|War" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00070007.jpg" class="img-fluid" />
                  <p>Overlord</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00058697" data-v="https://www.youtube.com/watch?v=rBiyoc4E3mM"
                  data-title="Welcome to Marwen" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00079181.jpg" class="img-fluid" />
                  <p>Welcome to Marwen</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049894"
                  data-v="https://www.youtube.com/watch?v=nN2yBBSRC78&amp;feature=youtu.be" data-title="Widows"
                  data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069914.jpg" class="img-fluid" />
                  <p>Widows</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049895"
                  data-v="https://www.youtube.com/watch?v=y7wzBVARwaU&amp;feature=youtu.be"
                  data-title="Bad Times At The El Royale" data-genre="Suspense|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069917.jpg" class="img-fluid" />
                  <p>Bad Times At The El Royale</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065083" data-v="https://www.youtube.com/watch?v=NJU1t4m93tc"
                  data-title="According To Matthew" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00086296.jpg" class="img-fluid" />
                  <p>According To Matthew</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00066326" data-v="https://www.youtube.com/watch?v=kTU_CZDsVxQ"
                  data-title="Kursk" data-genre="Action|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00087702.jpg" class="img-fluid" />
                  <p>Kursk</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052253" data-v="https://www.youtube.com/watch?v=bVnPteFpqZs&amp;t=44s"
                  data-title="Holmes and Watson" data-genre="Action|Comedy|Mystery" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072363.jpg" class="img-fluid" />
                  <p>Holmes and Watson</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00034528" data-v="https://www.youtube.com/watch?v=WqF3VTv0cqU"
                  data-title="Fighting with My Family" data-genre="Comedy" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00053344.jpg" class="img-fluid" />
                  <p>Fighting with My Family</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067458" data-v="https://www.youtube.com/watch?v=iANk6aUiSvk"
                  data-title="On the Basis of Sex" data-genre="Biography|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00088983.jpg" class="img-fluid" />
                  <p>On the Basis of Sex</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00068333" data-v="https://www.youtube.com/watch?v=xVez1uCdndc"
                  data-title="The Vanishing" data-genre="Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089969.jpg" class="img-fluid" />
                  <p>The Vanishing</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071782"
                  data-v="https://www.youtube.com/watch?time_continue=31&amp;v=XEw2uHUYUPk" data-title="Beautiful Boy"
                  data-genre="Biography|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093663.jpg" class="img-fluid" />
                  <p>Beautiful Boy</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071217" data-v="https://www.youtube.com/watch?v=jO3GsRQO0dM"
                  data-title="Vice" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093042.jpg" class="img-fluid" />
                  <p>Vice</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00045454" data-v="https://www.youtube.com/watch?v=BO0BDQEslwQ"
                  data-title="The Wedding Guest" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00065250.jpg" class="img-fluid" />
                  <p>The Wedding Guest</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00068736" data-v="https://www.youtube.com/watch?v=jUakWaEpCmY"
                  data-title="The Informer" data-genre="Crime|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00090351.jpg" class="img-fluid" />
                  <p>The Informer</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00018560" data-v="https://www.youtube.com/watch?v=mlDzr6_LN7g"
                  data-title="Vallavanukkum Vallavan" data-genre="Action|Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00037927.jpg" class="img-fluid" />
                  <p>Vallavanukkum Vallavan</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00041474" data-v="https://www.youtube.com/watch?v=cvNgydui_Ic"
                  data-title="Iravaakaalam" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00060824.jpg" class="img-fluid" />
                  <p>Iravaakaalam</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00041891" data-v="https://www.youtube.com/watch?v=PUGLwmM2NrM"
                  data-title="Adraa Raja Adidaa Nature Is Watching" data-genre="Comedy|Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00061259.jpg" class="img-fluid" />
                  <p>Adraa Raja Adidaa Nature Is Watching</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00011851"
                  data-v="https://www.youtube.com/watch?v=ekvi8tVYem0&amp;feature=youtu.be" data-title="Dhruva Natchathiram"
                  data-genre="Action|Thriller" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00015426.jpg" class="img-fluid" />
                  <p>Dhruva Natchathiram</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00044942"
                  data-v="https://www.youtube.com/watch?reload=9&amp;v=JMNIdf5tyro" data-title="R.K. Nagar"
                  data-genre="Comedy|Romance" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00064763.jpg" class="img-fluid" />
                  <p>R.K. Nagar</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057608" data-v="https://www.youtube.com/watch?v=54WpSPZhgzA"
                  data-title="China" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077957.jpg" class="img-fluid" />
                  <p>China</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057688" data-v="https://www.youtube.com/watch?v=t6yO6Xau-9Q"
                  data-title="Yaar Ivargal" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00078101.jpg" class="img-fluid" />
                  <p>Yaar Ivargal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060954"
                  data-v="https://www.youtube.com/watch?v=lCyapEg0X7c&amp;feature=youtu.be"
                  data-title="Arasiyalla Idhellam Saadharanam appa" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081536.jpg" class="img-fluid" />
                  <p>Arasiyalla Idhellam Saadharanam appa</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00061362"
                  data-v="https://www.youtube.com/watch?v=Ld1KWQkmYQU&amp;feature=youtu.be" data-title="Katteri"
                  data-genre="Drama|Horror" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00082038.jpg" class="img-fluid" />
                  <p>Katteri</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00064528" data-v="https://www.youtube.com/watch?v=FLIcy7L8G3w"
                  data-title="100% Kadhal" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00085699.jpg" class="img-fluid" />
                  <p>100% Kadhal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00069061" data-v="https://www.youtube.com/watch?v=rjoLV9-3OH8"
                  data-title="Thavam " data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00090720.jpg" class="img-fluid" />
                  <p>Thavam </p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071276" data-v="https://www.youtube.com/watch?v=2GsqkgK08sk"
                  data-title="Zhagaram" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093085.jpg" class="img-fluid" />
                  <p>Zhagaram</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072249" data-v="https://www.youtube.com/watch?v=ibzOECn9kJw"
                  data-title="Ganesha Meendum Santhipom" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094118.jpg" class="img-fluid" />
                  <p>Ganesha Meendum Santhipom</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072253" data-v="https://www.youtube.com/watch?v=vH1AL0GMurY"
                  data-title="Rocketry" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094131.jpg" class="img-fluid" />
                  <p>Rocketry</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072284" data-v="https://www.youtube.com/watch?v=73YoSPWNFfw"
                  data-title="Kanchana 3" data-genre="Comedy|Horror" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094181.jpg" class="img-fluid" />
                  <p>Kanchana 3</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00071801" data-v="https://www.youtube.com/watch?v=KTWsGOeTWyA"
                  data-title="Mehandi Circus" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00093669.jpg" class="img-fluid" />
                  <p>Mehandi Circus</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067305"
                  data-v="https://www.youtube.com/watch?v=yrMHYwvMP7s&amp;feature=youtu.be" data-title="Ayogya"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00088789.jpg" class="img-fluid" />
                  <p>Ayogya</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00061827" data-v="https://www.youtube.com/watch?v=rQswdMeCOSs"
                  data-title="Gangs Of Madras" data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00082515.jpg" class="img-fluid" />
                  <p>Gangs Of Madras</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00035901" data-v="https://www.youtube.com/watch?v=DR9qBUOey6M"
                  data-title="Nuvvu Evaro Nenu Evaro" data-genre="Comedy|Romance" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00054821.jpg" class="img-fluid" />
                  <p>Nuvvu Evaro Nenu Evaro</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00043937" data-v="https://www.youtube.com/watch?v=N09ERfpnF9s"
                  data-title="Good Bad Ugly" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00063723.jpg" class="img-fluid" />
                  <p>Good Bad Ugly</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00046390" data-v="https://www.youtube.com/watch?v=09L9I7JxlTw&amp;t=2s"
                  data-title="Lalijo Lalijo" data-genre="Horror|Thriller" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00066255.jpg" class="img-fluid" />
                  <p>Lalijo Lalijo</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00046802" data-v="https://www.youtube.com/watch?v=qjDZhYgOVW0"
                  data-title="47 Days" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00066783.jpg" class="img-fluid" />
                  <p>47 Days</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052722" data-v="https://www.youtube.com/watch?v=NBZgn-U0Cy0"
                  data-title="Ugram" data-genre="Action|Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072884.jpg" class="img-fluid" />
                  <p>Ugram</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00066384"
                  data-v="https://www.youtube.com/watch?v=QDjqpug8u1Y&amp;feature=youtu.be" data-title="Hawaa"
                  data-genre="Comedy" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00087781.jpg" class="img-fluid" />
                  <p>Hawaa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00072783" data-v="https://www.youtube.com/watch?v=T9LM7JM1RT8"
                  data-title="Malli Malli Chusa" data-genre="Drama" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00094596.jpg" class="img-fluid" />
                  <p>Malli Malli Chusa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00060801" data-v="https://www.youtube.com/watch?v=gpO4JhwnYxE"
                  data-title="Once More" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00081422.jpg" class="img-fluid" />
                  <p>Once More</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00064233"
                  data-v="https://www.youtube.com/watch?time_continue=6&amp;v=OyqCGwhEIXs" data-title="Rajan"
                  data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00085422.jpg" class="img-fluid" />
                  <p>Rajan</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067545" data-v="https://www.youtube.com/watch?v=RHFZE32cZDs"
                  data-title="Vitthala Vitthala" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089066.jpg" class="img-fluid" />
                  <p>Vitthala Vitthala</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057270" data-v="https://www.youtube.com/watch?v=otfR-8OkbwI"
                  data-title="Ye Re Ye Re Paisa 2" data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077482.jpg" class="img-fluid" />
                  <p>Ye Re Ye Re Paisa 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00075272"
                  data-v="https://www.youtube.com/watch?v=H581h5f-nWA&amp;feature=youtu.be" data-title="Shivaa"
                  data-genre="Drama" data-language="Marathi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00097380.jpg" class="img-fluid" />
                  <p>Shivaa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00044203" data-v="https://www.youtube.com/watch?v=S1GdkQYxyBY"
                  data-title="Tesla" data-genre="Sci-Fi|Thriller" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00063888.jpg" class="img-fluid" />
                  <p>Tesla</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00048586" data-v="https://www.youtube.com/watch?v=ENL9uAQTFBI"
                  data-title="Kurukshetra" data-genre="Drama|History|War" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00068498.jpg" class="img-fluid" />
                  <p>Kurukshetra</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049237"
                  data-v="https://www.youtube.com/watch?v=yIaIxERbQOI&amp;feature=youtu.be" data-title="1888"
                  data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069185.jpg" class="img-fluid" />
                  <p>1888</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051608"
                  data-v="https://www.youtube.com/watch?v=FTr_-HvF93Y&amp;feature=youtu.be" data-title="Dhwaja"
                  data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071662.jpg" class="img-fluid" />
                  <p>Dhwaja</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00057015"
                  data-v="https://www.youtube.com/watch?time_continue=2&amp;v=ftHf9JqOS5s" data-title="Kaalachakra"
                  data-genre="Drama" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00077269.jpg" class="img-fluid" />
                  <p>Kaalachakra</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067833" data-v="https://www.youtube.com/watch?v=e87Z_bb8f7w"
                  data-title="Randhawa" data-genre="Action|Drama|Thriller" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089348.jpg" class="img-fluid" />
                  <p>Randhawa</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00065096" data-v="https://www.youtube.com/watch?v=088agv6FPi8"
                  data-title="BMW" data-genre="Comedy|Drama|Romance" data-language="Kannada">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00086305.jpg" class="img-fluid" />
                  <p>BMW</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00063197"
                  data-v="https://www.youtube.com/watch?v=pMe8tFsUENQ&amp;feature=youtu.be" data-title="Veerappan"
                  data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00084117.jpg" class="img-fluid" />
                  <p>Veerappan</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00069173" data-v="https://www.youtube.com/watch?v=XVEfvf-fnXQ"
                  data-title="Padmini" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00090847.jpg" class="img-fluid" />
                  <p>Padmini</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00068296" data-v="https://www.youtube.com/watch?v=eEPhAyHnNyM"
                  data-title="Sleeplessly Yours" data-genre="Drama" data-language="Malayalam">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089899.jpg" class="img-fluid" />
                  <p>Sleeplessly Yours</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00048676" data-v="https://www.youtube.com/watch?v=Pup6pxmNfC4"
                  data-title="Swapnajaal" data-genre="Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00068618.jpg" class="img-fluid" />
                  <p>Swapnajaal</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00050356" data-v="https://www.youtube.com/watch?v=QqPfx7IZ8NU"
                  data-title="Jonaki" data-genre="Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00070389.jpg" class="img-fluid" />
                  <p>Jonaki</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00010375" data-v="https://www.youtube.com/watch?v=B46VkrKa9gk"
                  data-title="Bobbyr Bondhura" data-genre="Drama" data-language="Bengali">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00027332.jpg" class="img-fluid" />
                  <p>Bobbyr Bondhura</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00041597" data-v="https://www.youtube.com/watch?v=PNd8Ytiw4NU"
                  data-title="Pass Na Pass" data-genre="Drama" data-language="Gujarati">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00060965.jpg" class="img-fluid" />
                  <p>Pass Na Pass</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049611" data-v="https://www.youtube.com/watch?v=GiNLakRtEIg"
                  data-title="Herogiri" data-genre="Drama" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069576.jpg" class="img-fluid" />
                  <p>Herogiri</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051294"
                  data-v="https://www.youtube.com/watch?v=ONokHZ12qUE&amp;feature=youtu.be" data-title="Dil Hamar Mane Na"
                  data-genre="Action|Drama|Romance" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071338.jpg" class="img-fluid" />
                  <p>Dil Hamar Mane Na</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051297"
                  data-v="https://www.youtube.com/watch?v=-xtVlDQPEqY&amp;feature=youtu.be" data-title="Prem Ki Padhai"
                  data-genre="Drama|Romance" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071341.jpg" class="img-fluid" />
                  <p>Prem Ki Padhai</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00053239"
                  data-v="https://www.youtube.com/watch?v=G83FfSS88Cw&amp;feature=share" data-title="Jangal Raj"
                  data-genre="Drama" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00073408.jpg" class="img-fluid" />
                  <p>Jangal Raj</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054702" data-v="https://www.youtube.com/watch?v=LSFczHN6mFQ"
                  data-title="Hamar Mission Hamar Banaras" data-genre="Drama" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00074920.jpg" class="img-fluid" />
                  <p>Hamar Mission Hamar Banaras</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00054966" data-v="https://www.youtube.com/watch?v=j3VWisUUI8w"
                  data-title="Mil Gaili Chandaniya" data-genre="Drama" data-language="Bhojpuri">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00075144.jpg" class="img-fluid" />
                  <p>Mil Gaili Chandaniya</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00067770" data-v="https://www.youtube.com/watch?v=Ww0VRD6SDMM"
                  data-title="Chuskit" data-genre="Drama" data-language="Ladakhi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00089277.jpg" class="img-fluid" />
                  <p>Chuskit</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00039767" data-v="https://www.youtube.com/watch?v=XiURiU0E26U"
                  data-title="Polaroid" data-genre="Horror" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00058971.jpg" class="img-fluid" />
                  <p>Polaroid</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051185" data-v="https://www.youtube.com/watch?v=C_bfOWof0Sg"
                  data-title="Marshall" data-genre="Biography|Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071204.jpg" class="img-fluid" />
                  <p>Marshall</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00051187" data-v="https://www.youtube.com/watch?v=CItEtnp3nPY&amp;t=38s"
                  data-title="Roman J. Israel, Esq." data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00071207.jpg" class="img-fluid" />
                  <p>Roman J. Israel, Esq.</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00053757" data-v="https://www.youtube.com/watch?v=mwgUesU1pz4"
                  data-title="Under the Silver Lake" data-genre="Crime|Thriller" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00073960.jpg" class="img-fluid" />
                  <p>Under the Silver Lake</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00049897" data-v="https://www.youtube.com/watch?v=TADKiHYj6RE"
                  data-title="The Kid Who Would Be King" data-genre="Drama" data-language="English">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00069919.jpg" class="img-fluid" />
                  <p>The Kid Who Would Be King</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00039675"
                  data-v="https://www.youtube.com/watch?v=eD_kKt_JeBw&amp;feature=youtu.be&amp;app=desktop" data-title="Party"
                  data-genre="Drama" data-language="Tamil">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00058865.jpg" class="img-fluid" />
                  <p>Party</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00045445" data-v="https://www.youtube.com/watch?v=dkBRO2ojiX4"
                  data-title="Suvarna Sundari" data-genre="Drama|Thriller" data-language="Telugu">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00065240.jpg" class="img-fluid" />
                  <p>Suvarna Sundari</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00052188" data-v="https://www.youtube.com/watch?v=Ltvt4p_1xSU"
                  data-title="Sadak 2" data-genre="Drama" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00072278.jpg" class="img-fluid" />
                  <p>Sadak 2</p>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-6">
                <div class="movie-block my-2" id="EG00055082"
                  data-v="https://www.youtube.com/watch?v=lT15HtJ5Gsk&amp;feature=push-u-sub&amp;attr_tag=nLZTz0SoHwjXw4cq-6"
                  data-title="Shamshera" data-genre="Action|Drama|Period" data-language="Hindi">
                  <img src="https://in.bmscdn.com/events/moviecard/ET00075253.jpg" class="img-fluid" />
                  <p>Shamshera</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
      </div>
    );
  }
}

export default App;
