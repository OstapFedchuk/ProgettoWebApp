<template>
    <header>
        <div id="menu">
            <img src="../assets/logo.png" alt="Logo">
            <a href="/"><p>Home</p></a>
            <a href="/about"><p>Chi Siamo</p></a>
            <a href="/contacts"><p>Contatti</p></a>
        </div>
    </header>
</template>

<script setup>  
</script>

<style scoped>

    #menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #40798c;
    }

    #menu a {
        color: white;
        text-decoration: none;
        margin:auto;
    }

    #menu a p {
        font-family: 'Arial', sans-serif;
        font-weight: bold;
    }

    #menu a:hover {
        text-decoration: underline;
    }

</style>