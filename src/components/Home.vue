<template>
    <div class="container-home">
        <div class="arrows">
            <div class="arrow-div">
                <ChevronLeftIcon />
            </div>
            <div class="arrow-div">
                <ChevronRightIcon />
            </div>
        </div>
        <section>
            <h1>Good morning</h1>

            <article class="grid">
                <div class="card">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-content">
                        <span>Skyfall</span>
                        <button>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-content">
                        <span>Skyfall</span>
                        <button>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-content">
                        <span>Skyfall</span>
                        <button>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-content">
                        <span>Skyfall</span>
                        <button>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-content">
                        <span>Skyfall</span>
                        <button>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-content">
                        <span>Skyfall</span>
                        <button>
                            <PlayIcon />
                        </button>
                    </div>
                </div>
            </article>
        </section>
        <section>
            <h2>Shows you might like</h2>

            <div class="card-like-container">
                <div class="card-like-musics">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-like-musics-content">
                        <h3>Skyfall</h3>
                        <span>Adelle</span>
                    </div>
                </div>
                <div class="card-like-musics">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-like-musics-content">
                        <h3>Skyfall</h3>
                        <span>Adelle</span>
                    </div>
                </div>
                <div class="card-like-musics">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-like-musics-content">
                        <h3>Skyfall</h3>
                        <span>Adelle</span>
                    </div>
                </div>
                <div class="card-like-musics">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-like-musics-content">
                        <h3>Skyfall</h3>
                        <span>Adelle</span>
                    </div>
                </div>
                <div class="card-like-musics">
                    <img src="../assets/images/capa-album.jpg" alt="">
                    <div class="card-like-musics-content">
                        <h3>Skyfall</h3>
                        <span>Adelle</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>


</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.container-home {
    padding: 40px;

    h1 {
        color: #fff;
        font-size: 30px;
        margin: 20px 0;
    }

    .arrows {
        display: flex;
        align-items: center;
        gap: 20px;

        .arrow-div {
            background: $color-gradient-5;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $arrow-color;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .card {
        display: flex;
        width: 300px;
        margin-bottom: 30px;


        img {
            height: 75px;
            width: 100px;

            &:hover {
                cursor: pointer;
            }
        }

        .card-content {
            height: 75px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #282828;
            padding: 0 20px;
            color: #fff;

            &:hover {
                background-color: #4e4d4d;
                transition: .5s;
                cursor: pointer;

                button {
                    transition: .5s;
                    visibility: visible;
                    cursor: pointer;
                }
            }

            button {
                border: none;
                background-color: rgb(24, 224, 24);
                color: $navbar-hover-text-color;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                visibility: hidden;
            }
        }
    }

    h2 {
        color: #fff;
        font-size: 20px;
        margin: 20px 0;
    }

    .card-like-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
    }

    .card-like-musics {
        background-color: #282828;
        max-width: 150px;
        padding: 10px;

        img {
            width: 100%;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
            }
        }

        .card-like-musics-content {
            h3 {
                color: $navbar-hover-text-color;    
            }

            span {
                color: $navbar-text-color;
            }
        }
    }
}
</style>