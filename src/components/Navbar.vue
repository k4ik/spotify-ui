<template>
    <div class="navbar-box">
        <img src="../assets/images/spotify-logo.png" alt="spotify logo">
        <div class="box-icons">
            <div class="icons">
                <HomeIcon/>
                <span>Home</span>
            </div>
            <div class="icons">
                <SearchIcon/>
                <span>Search</span>
            </div>
            <div class="icons">
                <LibraryIcon/>
                <span>Your Library</span>
            </div>

        </div>
        <div id="row"></div>
        <div class="playlists">
            <ul>
                <li>My Playlist #1</li>
                <li>My Playlist #2</li>
                <li>My Playlist #3</li>
                <li>My Playlist #4</li>
                <li>My Playlist #5</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/variables";

    .navbar-box {
        color: $navbar-text-color;
        padding: 30px;

        img {
            margin-bottom: 30px;
        }

        .box-icons {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .icons {
                display: flex;
                align-items: center;
                gap: 20px;
                padding: 5px;

                &:hover {
                    cursor: pointer;
                    transition: .2s;
                    background-color: #282828;
                    border-radius: 5px;
                }
            }
        }

        #row {
            height: 1px;
            background-color: $row-color;
            width: 100%;
            margin: 40px auto;
        }

        .playlists {
            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 10px;

                li{
                    &:hover {
                        cursor: pointer;
                        transition: .2s;
                        color: $navbar-hover-text-color;
                    }
                }
            }
        }
    }
</style>