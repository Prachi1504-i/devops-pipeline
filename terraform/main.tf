terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

resource "local_file" "ansible_inventory" {
  filename = "${path.module}/../ansible/inventory.ini"
  content  = "[appservers]\nlocalhost ansible_connection=local\n"
}

output "inventory_path" {
  value = local_file.ansible_inventory.filename
}
