import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://staging-jcd-be.gailabs.com/admin/auth/login');
  await page.getByPlaceholder('e.g. kai@doe.com').click();
  await page.getByPlaceholder('e.g. kai@doe.com').click();
  await page.getByPlaceholder('e.g. kai@doe.com').fill('jamcracker@test.com');
  await page.getByPlaceholder('e.g. kai@doe.com').press('Tab');
  await page.getByLabel('Password*').fill('Jamcracker123');
  await page.getByLabel('Password*').press('Enter');
  await page.getByRole('link', { name: 'Content Manager' }).click();
  await page.getByRole('link', { name: 'Instances', exact: true }).click();
  await page.getByRole('link', { name: 'Create new entry' }).click();
  await page.getByLabel('InstanceId').click();
  await page.getByLabel('InstanceId').fill('i-010101');
  // Your JSON data
const data = {
    "AmiLaunchIndex": 0,
    "ImageId": "ami-0263e4deb427da90e",
    "InstanceId": "i-0e67140e92bdcb4fb",
    "InstanceType": "t2.nano",
    "KeyName": "10e0f68e-f0d3-4f9f-8c39-3186ccbae0e0",
    "LaunchTime": "2024-06-09T06:43:44.000Z",
    "Monitoring": {
      "State": "disabled"
    },
    "Placement": {
      "AvailabilityZone": "us-east-1a",
      "GroupName": "\"",
      "Tenancy": "default"
    },
    "PrivateDnsName": "ip-172-31-46-187.ec2.internal",
    "PrivateIpAddress": "172.31.46.187",
    "ProductCodes": [],
    "PublicDnsName": "\"",
    "State": {
      "Code": 80,
      "Name": "stopped"
    },
    "StateTransitionReason": "User initiated (2024-06-09 08:12:33 GMT)",
    "SubnetId": "subnet-038090273f5ab79a1",
    "VpcId": "vpc-01db539a87baef427",
    "Architecture": "x86_64",
    "BlockDeviceMappings": [
      {
        "DeviceName": "/dev/sda1",
        "Ebs": {
          "AttachTime": "2024-06-09T06:43:45.000Z",
          "DeleteOnTermination": true,
          "Status": "attached",
          "VolumeId": "vol-0973f59fc24135790"
        }
      }
    ],
    "ClientToken": "45af903d-ae35-4a99-9e8b-725a519464cb",
    "EbsOptimized": false,
    "EnaSupport": true,
    "Hypervisor": "xen",
    "ElasticGpuAssociations": [],
    "ElasticInferenceAcceleratorAssociations": [],
    "NetworkInterfaces": [
      {
        "Attachment": {
          "AttachTime": "2024-06-09T06:43:44.000Z",
          "AttachmentId": "eni-attach-0cf672b7af0b7624b",
          "DeleteOnTermination": true,
          "DeviceIndex": 0,
          "Status": "attached",
          "NetworkCardIndex": 0
        },
        "Description": "Default",
        "Groups": [
          {
            "GroupName": "STACK_1717915391939-jcdemovm34sg-lwuzp4v43nco",
            "GroupId": "sg-0f68f77a80b856f5f"
          }
        ],
        "Ipv6Addresses": [],
        "MacAddress": "0e:89:26:e7:fd:dd",
        "NetworkInterfaceId": "eni-0231ca252a25f3dee",
        "OwnerId": "672672931951",
        "PrivateDnsName": "ip-172-31-46-187.ec2.internal",
        "PrivateIpAddress": "172.31.46.187",
        "PrivateIpAddresses": [
          {
            "Primary": true,
            "PrivateDnsName": "ip-172-31-46-187.ec2.internal",
            "PrivateIpAddress": "172.31.46.187"
          }
        ],
        "SourceDestCheck": true,
        "Status": "in-use",
        "SubnetId": "subnet-038090273f5ab79a1",
        "VpcId": "vpc-01db539a87baef427",
        "InterfaceType": "interface",
        "Ipv4Prefixes": [],
        "Ipv6Prefixes": []
      }
    ],
    "RootDeviceName": "/dev/sda1",
    "RootDeviceType": "ebs",
    "SecurityGroups": [
      {
        "GroupName": "STACK_1717915391939-jcdemovm34sg-lwuzp4v43nco",
        "GroupId": "sg-0f68f77a80b856f5f"
      }
    ],
    "SourceDestCheck": true,
    "StateReason": {
      "Code": "Client.UserInitiatedShutdown",
      "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
    },
    "Tags": [
      {
        "Key": "server_meta_key",
        "Value": "dda765de-dbe6-417e-a3c0-2af5e122fa81"
      },
      {
        "Key": "Name",
        "Value": "jcdemovm34"
      }
    ],
    "VirtualizationType": "hvm",
    "CpuOptions": {
      "CoreCount": 1,
      "ThreadsPerCore": 1
    },
    "CapacityReservationSpecification": {
      "CapacityReservationPreference": "open"
    },
    "HibernationOptions": {
      "Configured": false
    },
    "Licenses": [],
    "MetadataOptions": {
      "State": "applied",
      "HttpTokens": "optional",
      "HttpPutResponseHopLimit": 1,
      "HttpEndpoint": "enabled",
      "HttpProtocolIpv6": "disabled",
      "InstanceMetadataTags": "disabled"
    },
    "EnclaveOptions": {
      "Enabled": false
    },
    "PlatformDetails": "Linux/UNIX",
    "UsageOperation": "RunInstances",
    "UsageOperationUpdateTime": "2024-06-09T06:43:44.000Z",
    "PrivateDnsNameOptions": {
      "HostnameType": "ip-name",
      "EnableResourceNameDnsARecord": false,
      "EnableResourceNameDnsAAAARecord": false
    },
    "MaintenanceOptions": {
      "AutoRecovery": "default"
    },
    "CurrentInstanceBootMode": "legacy-bios"
  };
  
  await page.getByLabel('data').fill('')
});