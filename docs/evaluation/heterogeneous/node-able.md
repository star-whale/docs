---
title: Devices as Kubernetes nodes
---

## Characteristics

These devices can run as standalone Kubernetes nodes. The node concept can be referenced in the official Kubernetes [documentation](https://kubernetes.io/docs/concepts/architecture/nodes/).
Simply put, the device should at least support installing and running:

* [kubelet](https://kubernetes.io/docs/reference/generated/kubelet)
* [kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/)
* [container runtime](https://kubernetes.io/docs/setup/production-environment/container-runtimes)

After connecting, these devices usually need a custom runtime image to run Starwhale [Jobs](/docs/overview/concepts#job-step-and-task).

## Typical Devices

### Raspberry Pi

[Raspberry Pi](https://www.raspberrypi.com/) is a well-known microcomputer that we are familiar with. Apart from being ARM architecture, it is not much different from a regular server to use. Here is a brief introduction to adding a Raspberry Pi to a Kubernetes cluster.

1. Install the operating system. It is recommended to use the Ubuntu-based [Raspberry Pi OS](https://www.raspberrypi.com/software/).
2. Install the Docker environment by following the instructions in the Docker [official documentation](https://docs.docker.com/engine/install/debian/).
3. Join an existing Kubernetes cluster. If you encounter any problems during the process, you can refer to [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way).

After successfully joining the cluster, you can refer to the subsequent documents to schedule tasks to the Raspberry Pi for experiments.

### Jetson

[Jetson](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/) is a class of high-performance embedded devices produced by Nvidia, with built-in GPUs. We usually use it to take full advantage of its GPU computing power.

Below we take Orin as an example to explain the environment configuration.

#### Node Environment Initialization

Initialize the customized Ubuntu system and JetPack suite according to the official documentation, and ensure that the official demo can run successfully with a Docker environment. [Orin initialization documentation](https://developer.nvidia.com/embedded/learn/get-started-jetson-agx-orin-devkit).

#### GPU Configuration

Kubernetes supports publishing hardware resources to the cluster based on the [device plugin](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/) mechanism.
NVIDIA provides its own [Kubernetes device plugin](https://github.com/NVIDIA/k8s-device-plugin) for GPUs, which has supported Jetson series devices since [v0.13.0-rc.1](https://github.com/NVIDIA/k8s-device-plugin/releases/tag/v0.13.0-rc.1).

1. Configure nvidia-container-runtime as the default runtime. Refer to the [link](https://github.com/NVIDIA/k8s-device-plugin#preparing-your-gpu-nodes).
   For example, if using Docker, you need to configure `/etc/docker/daemon.json` to contain:

    ```json
    {
        "runtimes": {
            "nvidia": {
                "path": "nvidia-container-runtime",
                "runtimeArgs": []
            }
        },

        "default-runtime": "nvidia"
    }
    ```

2. Use the `deviceQuery` mentioned in the Jetson official tutorial to test GPU usage in Docker.

   If there is output like below, then our Docker environment is configured properly:

    ```bash
    # docker run --rm -v `/path/to/deviceQuery`:/root/deviceQuery nvcr.io/nvidia/l4t-jetpack:r35.1.0 /root/deivceQuery

    /root/deviceQuery Starting...

    CUDA Device Query (Runtime API) version (CUDART static linking)

    Detected 1 CUDA Capable device(s)

    Device 0: "Orin"
    CUDA Driver Version / Runtime Version 11.4 / 11.4
    CUDA Capability Major/Minor version number: 8.7
    Total amount of global memory: 30623 MBytes (32110190592 bytes)
    (016) Multiprocessors, (128) CUDA Cores/MP: 2048 CUDA Cores
    GPU Max Clock rate: 1300 MHz (1.30 GHz)
    Memory Clock rate: 1300 Mhz
    Memory Bus Width: 128-bit
    L2 Cache Size: 4194304 bytes
    Maximum Texture Dimension Size (x,y,z) 1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)
    Maximum Layered 1D Texture Size, (num) layers 1D=(32768), 2048 layers
    Maximum Layered 2D Texture Size, (num) layers 2D=(32768, 32768), 2048 layers
    Total amount of constant memory: 65536 bytes
    Total amount of shared memory per block: 49152 bytes
    Total shared memory per multiprocessor: 167936 bytes
    Total number of registers available per block: 65536
    Warp size: 32
    Maximum number of threads per multiprocessor: 1536
    Maximum number of threads per block: 1024
    Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
    Max dimension size of a grid size (x,y,z): (2147483647, 65535, 65535)
    Maximum memory pitch: 2147483647 bytes
    Texture alignment: 512 bytes
    Concurrent copy and kernel execution: Yes with 2 copy engine(s)
    Run time limit on kernels: No
    Integrated GPU sharing Host Memory: Yes
    Support host page-locked memory mapping: Yes
    Alignment requirement for Surfaces: Yes
    Device has ECC support: Disabled
    Device supports Unified Addressing (UVA): Yes
    Device supports Managed Memory: Yes
    Device supports Compute Preemption: Yes
    Supports Cooperative Kernel Launch: Yes
    Supports MultiDevice Co-op Kernel Launch: Yes
    Device PCI Domain ID / Bus ID / location ID: 0 / 0 / 0
    Compute Mode:
        <Default (multiple host threads can use ::cudaSetDevice() with device simultaneously)>

    deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 11.4, CUDA Runtime Version = 11.4, NumDevs = 1
    ```

3. Join the node to the Kubernetes cluster.
   This step is no different from a server. Refer to the related Kubernetes documentation for details.

4. Configure the device plugin daemon set.
   Refer to the [link](https://github.com/NVIDIA/k8s-device-plugin#enabling-gpu-support-in-kubernetes).

   Take `v0.13.0-rc.1` as an example:

    ```sh
    kubectl create -f https://raw.githubusercontent.com/NVIDIA/k8s-device-plugin/v0.13.0-rc.1/nvidia-device-plugin.yml
    ```

    Note: This operation will run the NVIDIA device plugin plugin on all Kubernetes nodes. If configured before, it will be updated. Please evaluate the image version used carefully.

5. Confirm GPU can be discovered and used in the cluster.
   Refer to the command below. Check that `nvidia.com/gpu` is in the Capacity of the Jetson node. The GPU is then recognized normally by the Kubernetes cluster.

    ```sh
    # kubectl describe node orin | grep -A15 Capacity
    Capacity:
    cpu:                12
    ephemeral-storage:  59549612Ki
    hugepages-1Gi:      0
    hugepages-2Mi:      0
    hugepages-32Mi:     0
    hugepages-64Ki:     0
    memory:             31357608Ki
    nvidia.com/gpu:     1
    pods:               110
    ```

#### Build and Use Custom Images

The l4t-jetpack image mentioned earlier can meet our general use. If we need to customize a more streamlined image or one with more features, we can make it based on l4t-base.
Relevant Dockerfiles can refer to [the image Starwhale made for mnist](https://github.com/star-whale/starwhale/tree/main/docker/devices/jetson).
