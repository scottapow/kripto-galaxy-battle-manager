<nav>
	<a href="/">Home</a>
	<a href="/manager">Manager</a>
</nav>
<main>
  <slot></slot>
</main>
<footer>
  Some Stuff
</footer>

<style>
  nav {
    display: flex;
    background-color: lightskyblue;
    padding: 12px;
    width: 100%;
    height: 40px;
  }
  nav a {
    padding: 4px;
    font-size: 18px;
    margin-left: 24px;
  }
  nav a:first-child {
    margin-left: 0;
  }
  main {
    min-height: calc(100vh - 160px);
    padding: 24px;
  }
  footer {
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: chocolate;
    color: white;
    font-size: 16px;
  }
</style>