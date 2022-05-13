<template>
	<div>
		<p>Cidade</p>
        <!-- usamos $router.go(-1) para que o utilizador vá para a página que estava anteriormente -->
		<button @click="$router.go(-1)">Voltar</button>
        
		<div v-if="distrito">
			<img :src="distrito.image" alt="" />
			<h4>{{ distrito.name }}</h4>
			<p>{{ distrito.year }}</p>
		</div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				distrito: [],
			};
		},
		created() {
			let distritos = [];
			if (localStorage.getItem('distritos')) distritos = JSON.parse(localStorage.getItem('distritos'));
            // Procurar nas brands a brand com o id igual ao id passado na rota
			this.distrito = distritos.find((distrito) => distrito.id == this.$route.params.id);
		},
	};
</script>

<style>

</style>