<template>
    <header>
        <div id="menu">
            <img src="../assets/logo.png" alt="Logo" height="100">
                <a href="/">Home</a>
                <a href="/about">Chi Siamo</a>
                <a href="/contacts">Contatti</a>
        </div>
    </header>
</template>

<script setup>  
</script>

<style scoped>

    #menu {
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

    #menu a:hover {
        text-decoration: underline;
    }

</style>