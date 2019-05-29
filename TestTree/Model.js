class Model
{
    constructor(_position, _texture)
    {
        let earth;

        let texture = new THREE.TextureLoader().load(_texture);


        let geometry = new THREE.SphereGeometry(5, 32, 32);
        let material = new THREE.MeshBasicMaterial({map:texture});

        earth = new THREE.Mesh(geometry, material);

        earth.position.x = _position.x;
        earth.position.y = _position.y;
        earth.position.z = _position.z;

        //earth.position = new THREE.Vector3(20 * Math.cos(30), 0, 20 * Math.sin(30));

        return earth;
    }
}