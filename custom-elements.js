class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-light rounded" aria-label="Eleventh navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="assets/images/logo.svg" height="55"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse" id="navbarsExample09">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
        `
  }
}
window.customElements.define('app-header', AppHeader)



class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="mt-auto pt-3 bg-light">
        <div class="container-fluid">
        <div class="row">
            <div class="col"><img class="mb-3" src="assets/images/logo.svg" height="35"></div>
        </div>
        <div class="row mx-sm-5">
            <div class="col-md-4">
                <p><a href="index.html">Home</a></p>
                <p><a href="about.html">About Us</a></p>
                <p><a href="contact.html">Contact Us</a></p>
            </div>
            <div class="col-md-4">
                <h6>Lincoln Investment</h6>
                <p>601 Office Center Drive, Suite 300<br />
                Fort Washington, PA 19034</p>
                <h5>800-242-1421</h5>
            </div>
            <div class="col-md-4">
                
            </div>
        </div>
    <div class="row mx-sm-5">
        <div class="col-md-12">
            <p class="small mt-3">Advisory services offered through Capital Analysts or Lincoln Investment, Registered Investment Advisers. Securities offered through Lincoln Investment Broker-Dealer, Member FINRA/SIPC.</p>
        </div>
    </div>
</div>
</footer>
`
  }
}
window.customElements.define('app-footer', AppFooter)
