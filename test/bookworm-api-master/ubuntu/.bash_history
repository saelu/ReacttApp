ls
mkdir $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$HOME/bin:$PATH
ls
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc
la
vi .bashrc 
ls
curl -o aws-iam-authenticator  https://amazon-eks.s3-us-west-2.amazonaws.com/1.11.5/2018-12-06/bin/linux/amd64/aws-iam-authenticator        
curl -o aws-iam-authenticator.sha256 https://amazon-eks.s3-us-west-2.amazonaws.com/1.11.5/2018-12-06/bin/darwin/amd64/aws-iam-authenticator.sha256
cp ./aws-iam-authenticator $HOME/bin/aws-iam-authenticator && export PATH=$HOME/bin:$PATH
aws-iam-authenticator help
awscli
pip3 install awscli --upgrade --user
sudo apt install python3-pip
sudo apt-get update
sudo apt install python3-pip
pip3 install awscli --upgrade --user
awscli 
sudo apt  install awscli   
aws --version
aws eks update-kubeconfig --name eks-cluster
aws eks update-kubeconfig --name eks_cluster
kubectl get svc
curl -O https://amazon-eks.s3-us-west-2.amazonaws.com/cloudformation/2019-02-11/aws-auth-cm.yaml
ls
vi aws-auth-cm.yaml 
kubectl apply -f aws-auth-cm.yaml
kubectl get nodes
kubectl get svc
kubectl get secrets
ls -l
kubectl get secrets
kubectl get secret default-token-ddwb4 -o jsonpath="{['data']['ca\.crt']}" | base64 --decode
kubectl create -f eks-admin-service-account.yaml
vi eks-admin-service-account.yaml
ls -l
kubectl apply -f eks-admin-service-account.yaml
vi eks-admin-cluster-role-binding.yaml
kubectl apply -f eks-admin-cluster-role-binding.yaml
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')
ls -l\
ls -l
ls -la
kubectl -n kube-system create serviceaccount tiller
kubectl create clusterrolebinding tiller   --clusterrole=cluster-admin   --serviceaccount=kube-system:tiller
helm init --service-account tiller
sudo snap install helm
$ sudo snap install helm --classic
sudo snap install helm --classic
helm init --service-account tiller
helm init --service-account tiller --tiller-image registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:<tag>
ls
clear
ls
clear
ls
kubectl get svc
ls
ls -l
clear
ls
kubeclt get svc
ls
lsd
ls
clear
ls
kubectl get svc
ls
ls -l
clear
kubectl
clear
ls
ls -l
kubectl get svc
aws eks update-kubeconfig --name eks-cluster
kubectl get svc
kubectl get nodes
ls
vi aws-auth-cm.yaml 
kubectl apply -f aws-auth-cm.yaml
kubectl get nodes
kubectl get secrets
kubectl get secret default-token-cwxld -o jsonpath="{['data']['ca\.crt']}" | base64 --decode
ls
kubectl apply -f eks-admin-service-account.yaml
kubectl apply -f eks-admin-cluster-role-binding.yaml
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')
ls
git clone https://github.com/kubernetes/examples
ls
cd examples/
ls
cd guestbook
ls
vi frontend-service.yaml 
vi storage-class.yaml
vi redis-master-pvc.yaml\
vi redis-master-pvc.yaml
vi redis-master-deployment.yaml 
kubectl apply -f storage-class.yaml
vi storage-class.yaml 
kubectl apply -f storage-class.yaml
vi storage-class.yaml 
kubectl apply -f storage-class.yaml
ls
vi redis-master-pvc.yaml 
kubectl apply -f redis-master-pvc.yaml 
kubectl apply -f redis-master-service.yaml
kubectl apply -f redis-master-deployment.yaml
kubectl apply -f redis-slave-deployment.yaml
kubectl apply -f redis-slave-service.yaml
kubectl apply -f frontend-service.yaml
ls
vi frontend-service.yaml 
kubectl apply -f frontend-service.yaml
kubectl apply -f frontend-deployment.yaml
kubectl get all
kubectl get nodes
ls
kubectl get svc
ls
vi redis-master-deployment.yaml 
kubectl get services
kubectl apply -f redis-master-deployment.yaml 
kubectl get services
vi redis-master-deployment.yaml 
kubectl get services
kubectl get nodes
kubectl get services
kubectl get svc
kubectl get all
kubectl get pods
ls
cd ../..
wget https://downloads-packages.s3.amazonaws.com/ubuntu-14.04/gitlab-ce_7.10.4~omnibus-1_amd64.deb
sudo apt-get install postfix
sudo dpkg -i gitlab-ce_7.10.4~omnibus-1_amd64.deb
sudo gitlab-ctl reconfigure
sudo dpkg -i gitlab-ce_7.10.4~omnibus-1_amd64.deb
sudo gitlab-ctl reconfigure
sudo gitlab-ctl status
GITLAB
gitlab
sudo apt install gitlab-cli 
sudo dpkg --configure -a
sudo apt install gitlab-cli 
gitlab
ls
ls -a
package list
sudo git package list
sudo package list
sudo apt package list
sudo apt --help
sudo apt list
sudo apt --help
sudo apt search 
sudo apt search  g*
sudo apt search  gitlab
apt-get install openssh-server postfix -y
sudo apt-get install openssh-server postfix -y
ls
sudo apt remove gitlab*
sudo apt remove gitlab
ls
vi gitlab-ce_7.10.4~omnibus-1_amd64.deb 
clear
ls
sudo rm -rf gitlab-ce_7.10.4~omnibus-1_amd64.deb 
ls
sudo apt search gitlab*
sudo apt remove gitlab-ce
sudo apt remove -f gitlab-ce
sudo apt install gitlab-ce
sudo apt remove gitlab-cli
sudo dpkg --remove --force-all ubuntu-mono
sudo apt-get update
sudo dpkg --remove --force-all ubuntu-mono
sudo apt remove gitlab-cli
sudo rm /var/lib/apt/lists/* -vf
sudo apt-get update
sudo apt search gitlab
sudo apt remove gitlab-ce
sudo apt-get --reinstall install gitlab-ce
sudo apt-get --reinstall gitlab-ce
sudo apt-get --reinstall install gitlab-ce
sudo apt-get --reinstall install gitlab*
ls
cd ..
ls
cd ubuntu/
ls -a
cd var
cd /var
ls
cd lib/dpkg/
ls
vi stats
vi status
cd ../
cd
ls
clear
ls
ls -a
ls
'ls
ls
