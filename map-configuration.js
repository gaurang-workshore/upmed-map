function createmap(e) {
  let n = document.getElementsByClassName(e.title),
      t = document.getElementsByClassName(e.latitude),
      s = document.getElementsByClassName(e.longitude),
      gmap = document.getElementsByClassName(e.googlemap),
      amap = document.getElementsByClassName(e.applemap),
      o = document.getElementsByClassName(e.listingdescription),
      l = [],
      a = [];

  for (M = 0; M < n.length; M++) {
    if ("" != t[M].innerHTML && "" != s[M].innerHTML) {
      a.push({
        tittle: n[M].innerHTML,
        lat: Number(t[M].innerHTML),
        lng: Number(s[M].innerHTML),
        contdiv: '<div class="info-box"><p class="projname">' + n[M].innerHTML + '</p><p class="projdesc">' + o[M].innerHTML + '</p><a class="um-texts" href="' + gmap[M].innerHTML + '" rel="noopener" target="_blank">Open in Google Map</a><br><a class="um-texts" href="' + amap[M].innerHTML + '" rel="noopener" target="_blank">Open in Apple Map</a></div>',
      });
    }
  }

  const g = new google.maps.Map(document.getElementById("map-div"), {
    zoom: 9,
    center: a[0],
    disableDefaultUI: true
  });

  const p = new google.maps.InfoWindow();

  for (M = 0; M < a.length; M++) {
    let icon = {
      url: 'https://uploads-ssl.webflow.com/631645b2553f411a30172973/645b81b13eff5d82cd826973_map%20pin.svg',
      scaledSize: new google.maps.Size(50, 50),
      anchor: new google.maps.Point(25, 50)
    };

    let marker = new google.maps.Marker({
      position: a[M],
      map: g,
      title: a[M].tittle,
      icon: icon,
    });

    l.push(marker);

    v(marker, a[M].contdiv);
  }

  function v(marker, content) {
    marker.addListener("click", () => {
      p.setContent(content);
      p.open(g, marker);
    });
  }
}
